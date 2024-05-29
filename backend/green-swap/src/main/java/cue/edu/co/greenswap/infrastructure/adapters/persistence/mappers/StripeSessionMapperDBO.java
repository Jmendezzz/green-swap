package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.StripeSession;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.StripeSessionEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface StripeSessionMapperDBO {
  StripeSessionEntity toEntity(StripeSession sale);
  StripeSession toDomain(StripeSessionEntity saleEntity);
}
