package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.models.Exchange;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ExchangeMapperDTO {
    ExchangeDTO toDTO(Exchange exchange);
    Exchange toEntity(ExchangeDTO exchangeDTO);
    Exchange toEntity(CreateExchangeDTO exchangeDTO);
}
