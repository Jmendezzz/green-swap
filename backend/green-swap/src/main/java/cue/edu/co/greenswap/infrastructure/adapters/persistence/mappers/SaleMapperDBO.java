package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Sale;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SaleMapperDBO {
    SaleEntity toEntity(Sale sale);
    Sale toDomain(SaleEntity saleEntity);
    List<Sale> toEntity(List<SaleEntity> salesEntity);
    List<SaleEntity> toDomain(List<Sale> sales);
}
