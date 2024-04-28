package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.ExchangeConstraint;
import cue.edu.co.greenswap.application.mappers.ExchangeMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ExchangeRepository;
import cue.edu.co.greenswap.application.ports.usecases.ExchangeService;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.enums.ExchangeStatus;
import cue.edu.co.greenswap.domain.models.Exchange;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ExchangeServiceImp implements ExchangeService {
  private final ExchangeRepository repository;
  private final ExchangeConstraint constraint;
  private final ExchangeMapperDTO mapper;
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
}
