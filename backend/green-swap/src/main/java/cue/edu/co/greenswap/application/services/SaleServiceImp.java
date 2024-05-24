package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.mappers.SaleMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.SaleRepository;
import cue.edu.co.greenswap.application.ports.usecases.SaleService;
import cue.edu.co.greenswap.domain.dtos.sale.CreateSaleDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;
import cue.edu.co.greenswap.domain.models.Sale;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class SaleServiceImp implements SaleService {
    private final SaleRepository repository;
    private final SaleMapperDTO mapper

    @Override
    public SaleDTO createSale(CreateSaleDTO createSaleDTO) {
        Sale saleToSave = mapper.toDomain(createSaleDTO);
        Sale saleSaved = repository.save(saleToSave);
        return mapper.toDTO(saleSaved);
    }

    @Override
    public Optional<SaleDTO> getSaleById(Long id) {
        return Optional.empty();
    }

    @Override
    public void deleteSaleById(Long id) {

    }
}
