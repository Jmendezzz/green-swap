package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Exchange;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ExchangeMapperDBO {
  ExchangeEntity toEntity(Exchange exchange);
  Exchange toDomain(ExchangeEntity exchange);
  List<Exchange> toDomain(List<ExchangeEntity> exchanges);
  List<ExchangeEntity> toEntity(List<Exchange> exchanges);
}
