package cue.edu.co.greenswap.application.factories.exchange;

import cue.edu.co.greenswap.application.mappers.ExchangeMapperDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.models.Exchange;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class CreateExchangeFactory implements  ExchangeFactory<Exchange, CreateExchangeDTO>{
  private final ExchangeMapperDTO mapper;
  @Override
  public Exchange createExchange(CreateExchangeDTO input) {
    Exchange exchangeToSave = mapper.toDomain(input);
    return null;
  }
}
