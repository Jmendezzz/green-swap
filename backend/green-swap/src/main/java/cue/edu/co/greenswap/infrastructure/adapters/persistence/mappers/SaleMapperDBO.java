package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Sale;
import cue.edu.co.greenswap.domain.models.StripeSession;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.StripeSessionEntity;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SaleMapperDBO {
    StripeSessionMapperDBO stripeSessionMapperDBO = Mappers.getMapper(StripeSessionMapperDBO.class);
    SaleEntity toEntity(Sale sale);
    Sale toDomain(SaleEntity saleEntity);
    List<Sale> toEntity(List<SaleEntity> salesEntity);
    List<SaleEntity> toDomain(List<Sale> sales);

    default StripeSession toDomain(StripeSessionEntity stripeSession) {
        return stripeSessionMapperDBO.toDomain(stripeSession);
    }
    default StripeSessionEntity toEntity(StripeSession stripeSession) {
        return stripeSessionMapperDBO.toEntity(stripeSession);
    }
}
