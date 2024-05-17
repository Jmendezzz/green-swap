package cue.edu.co.greenswap.application.services;

import com.sendgrid.helpers.mail.Mail;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.application.constraints.ExchangeConstraint;
import cue.edu.co.greenswap.application.factories.mail.ExchangeAcceptedMail;
import cue.edu.co.greenswap.application.mappers.ExchangeMapperDTO;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ExchangeRepository;
import cue.edu.co.greenswap.application.ports.usecases.EmailService;
import cue.edu.co.greenswap.application.ports.usecases.ExchangeService;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.enums.ExchangeStatus;
import cue.edu.co.greenswap.domain.models.Exchange;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
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
  @Override
  public ExchangeDTO createExchange(CreateExchangeDTO createExchangeDTO) {
    constraint.validateProductOfferedOwner(createExchangeDTO.productOffered());

    Exchange exchangeToSave = mapper.toEntity(createExchangeDTO);
    exchangeToSave.setStatus(ExchangeStatus.AWAITING_RESPONSE);

    Exchange exchangeSaved = repository.save(exchangeToSave);
    return mapper.toDTO(exchangeSaved);
  }

  @Override
  public Optional<ExchangeDTO> getExchangeById(Long id) {
    return repository.findById(id).map(mapper::toDTO);
  }

  @Override
  public void deleteExchange(Long id) {
    repository.deleteById(id);
  }

  @Override
  public ExchangeDTO acceptExchange(Long id) {
    Exchange exchange = constraint.validateExchangeExists(id);
    constraint.validateProductRequestedOwner(exchange);

    exchange.setStatus(ExchangeStatus.ACCEPTED);
    declineAfterAccept(exchange);

    repository.save(exchange);

    Map<String, Object> properties = new HashMap<>();
    properties.put("to", userMapperDTO.toDTO(exchange.getProductOffered().getOwner()));
    properties.put("magic_link", EmailConstant.URL_CONTINUE_EXCHANGE_PROCESS);

    Mail mail = exchangeAcceptedMailFactory.createMail(properties);
    emailService.sendEmail(mail);

    return mapper.toDTO(exchange);
  }
  private void declineAfterAccept(Exchange exchange) {
    repository.findAllByProductRequested(exchange.getProductRequested())
      .stream()
      .filter(e -> e.getStatus().equals(ExchangeStatus.AWAITING_RESPONSE))
      .forEach(e -> {
        e.setStatus(ExchangeStatus.DECLINED);
        repository.save(e);
      });
  }
}
