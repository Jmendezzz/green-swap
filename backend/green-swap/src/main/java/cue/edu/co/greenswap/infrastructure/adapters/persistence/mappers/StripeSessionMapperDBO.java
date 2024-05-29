package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.StripeSession;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.StripeSessionEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface StripeSessionMapperDBO {
    StripeSessionEntity toEntity(StripeSession stripeSession);
    StripeSession toDomain(StripeSessionEntity stripeSessionEntity);
    List<StripeSessionEntity> toEntity(List<StripeSession> stripeSessions);
    List<StripeSession> toDomain(List<StripeSessionEntity> stripeSessionEntities);
}
