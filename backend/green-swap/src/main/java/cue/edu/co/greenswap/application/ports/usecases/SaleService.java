package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.sale.CreateSaleDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;

import java.util.Optional;

public interface SaleService {
    SaleDTO createSale(CreateSaleDTO createSaleDTO);
    Optional<SaleDTO> getSaleById(Long id);
    void deleteSaleById(Long id);
}
