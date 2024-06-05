package cue.edu.co.greenswap.application.services;

import com.sendgrid.helpers.mail.Mail;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.application.constants.NotificationConstantMessage;
import cue.edu.co.greenswap.application.constraints.ExchangeConstraint;
import cue.edu.co.greenswap.application.factories.mail.ExchangeAcceptedMail;
import cue.edu.co.greenswap.application.mappers.ExchangeMapperDTO;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ExchangeRepository;
import cue.edu.co.greenswap.application.ports.usecases.EmailService;
import cue.edu.co.greenswap.application.ports.usecases.ExchangeService;
import cue.edu.co.greenswap.application.ports.usecases.NotificationService;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.notification.CreateNotificationDTO;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.enums.ExchangeStatus;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import cue.edu.co.greenswap.domain.models.Chat;
import cue.edu.co.greenswap.domain.models.Exchange;
import cue.edu.co.greenswap.infrastructure.websocket.controllers.NotificationController;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ExchangeServiceImp implements ExchangeService {
  private final ExchangeRepository repository;
  private final ExchangeConstraint constraint;
  private final ExchangeAcceptedMail exchangeAcceptedMailFactory;
  private final ExchangeMapperDTO mapper;
  private final UserMapperDTO userMapperDTO;
  private final EmailService emailService;
  private final NotificationController notificationController;
  private final NotificationService notificationService;

  /**
   * Method to create an exchange, and send the notification to the user that has the product requested
   * @param createExchangeDTO
   * @throws cue.edu.co.greenswap.infrastructure.exceptions.ExchangeException
   * @return ExchangeDTO
   */
  @Override
  public ExchangeDTO createExchange(CreateExchangeDTO createExchangeDTO) {
    constraint.validateProductOfferedOwner(createExchangeDTO.productOffered());
    constraint.validateProductsAvailability(createExchangeDTO);

    Exchange exchangeToSave = mapper.toDomain(createExchangeDTO);
    exchangeToSave.setStatus(ExchangeStatus.AWAITING_RESPONSE);
    exchangeToSave.setChat(createChat(exchangeToSave));

    Exchange exchangeSaved = repository.save(exchangeToSave);

    NotificationDTO notification = notificationService.save(new CreateNotificationDTO(
            userMapperDTO.toDTO(exchangeSaved.getProductRequested().getOwner()),
            String.format(NotificationConstantMessage.NEW_OFFER_RECEIVED, exchangeSaved.getProductOffered().getName()),
            false,
            EmailConstant.URL_FRONTEND + "my-exchanges/"
    ));
    notificationController.sendNotification(notification);
    return mapper.toDTO(exchangeSaved);
  }

  private Chat createChat(Exchange exchange) {
    Chat chat = new Chat();
    chat.setUser1(exchange.getProductOffered().getOwner());
    chat.setUser2(exchange.getProductRequested().getOwner());
    return chat;
  }

  /**
   * Method to get an exchange by id
   * @param id
   * @return Optional<ExchangeDTO>
   */

  @Override
  public Optional<ExchangeDTO> getExchangeById(Long id) {
    return repository.findById(id).map(mapper::toDTO);
  }


  @Override
  public void deleteExchange(Long id) {
    repository.deleteById(id);
  }

  /**
   * Method to accept an exchange
   * @param id
   * @return ExchangeDTO
   */
  @Override
  public ExchangeDTO acceptExchange(Long id) {
    Exchange exchange = constraint.validateExchangeExists(id);
    constraint.validateProductRequestedOwner(exchange);

    exchange.setStatus(ExchangeStatus.ACCEPTED);
    exchange.getProductRequested().setStatus(ProductStatus.EXCHANGED);
    exchange.getProductOffered().setStatus(ProductStatus.EXCHANGED);
    declineAfterAccept(exchange);

    repository.save(exchange);

    Map<String, Object> properties = new HashMap<>();
    properties.put("to", userMapperDTO.toDTO(exchange.getProductOffered().getOwner()));
    properties.put("magic_link", EmailConstant.URL_CONTINUE_EXCHANGE_PROCESS);
    properties.put("ProductOffered", exchange.getProductOffered());
    properties.put("ProductRequested", exchange.getProductRequested());

    Mail mail = exchangeAcceptedMailFactory.createMail(properties);
    emailService.sendEmail(mail);

    NotificationDTO notification = notificationService.save(new CreateNotificationDTO(
            userMapperDTO.toDTO(exchange.getProductOffered().getOwner()),
            String.format(NotificationConstantMessage.OFFER_ACCEPTED, exchange.getProductRequested().getName()),
            false,
            EmailConstant.URL_FRONTEND + "my-exchanges/"
    ));
    notificationController.sendNotification(notification);

    return mapper.toDTO(exchange);
  }


  /**
   * Method to get all the exchanges offers that have been made to an user
   * @param userId  the user id
   * @param pageable the pagination
   * @return ExchangeDTO
   */
  @Override
  public Page<ExchangeDTO> getExchangesOffersByUser(Long userId, Pageable pageable) {
    return repository.findAllOffersByUser(userId, pageable).map(mapper::toDTO);
  }

  /**
   * Method to get all the exchanges that have been offered by an user
   * @param userId  the user id
   * @param pageable the pagination
   * @return ExchangeDTO
   */

  @Override
  public Page<ExchangeDTO> getExchangesRequestedByUser(Long userId, Pageable pageable) {
    return repository.findAllRequestedByUser(userId, pageable).map(mapper::toDTO);
  }

  private void declineAfterAccept(Exchange exchange) {
    repository.findAllByProductRequested(exchange.getProductRequested())
      .stream()
      .filter(e -> e.getStatus().equals(ExchangeStatus.AWAITING_RESPONSE))
      .forEach(e -> {
        e.setStatus(ExchangeStatus.DECLINED);
        repository.save(e);
        NotificationDTO notification = notificationService.save(new CreateNotificationDTO(
                userMapperDTO.toDTO(e.getProductOffered().getOwner()),
                String.format(NotificationConstantMessage.OFFER_REJECTED, e.getProductRequested().getName()),
                false,
                EmailConstant.URL_FRONTEND + "/my-exchanges/"
        ));
        notificationController.sendNotification(notification);
      });
  }
}
