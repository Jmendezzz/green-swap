package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.SaleConstraint;
import cue.edu.co.greenswap.application.mappers.SaleMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.SaleRepository;
import cue.edu.co.greenswap.application.ports.usecases.SaleService;
import cue.edu.co.greenswap.domain.dtos.sale.CreateSaleDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;
import cue.edu.co.greenswap.domain.enums.SaleStatus;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.domain.models.Sale;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class SaleServiceImp implements SaleService {
    private final SaleRepository repository;
    private final SaleMapperDTO mapper;
    private final SaleConstraint constraint;

    @Override
    public SaleDTO createSale(CreateSaleDTO createSaleDTO) {

        Product product = constraint.validateProductExists(createSaleDTO.productId());
        Sale saleToSave = Sale.builder()
                .product(product)
                .status(SaleStatus.WAITING)
                .build();

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
