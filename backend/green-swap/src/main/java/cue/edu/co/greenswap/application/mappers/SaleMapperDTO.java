package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.sale.CreateSaleDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;
import cue.edu.co.greenswap.domain.models.Sale;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SaleMapperDTO {
    Sale toDomain(CreateSaleDTO createSaleDTO);
    Sale toDomain(SaleDTO saleDTO);
    SaleDTO toDTO(Sale sale);
}
