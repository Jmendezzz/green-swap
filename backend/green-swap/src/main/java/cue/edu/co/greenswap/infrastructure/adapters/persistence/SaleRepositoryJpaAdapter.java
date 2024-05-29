package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.SaleRepository;
import cue.edu.co.greenswap.domain.models.Sale;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.SaleRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.SaleMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class SaleRepositoryJpaAdapter implements SaleRepository {
    private final SaleRepositoryJpa repository;
    private final SaleMapperDBO mapperDBO;
    @Override
    public Sale save(Sale saleToSave) {
        SaleEntity saleSaved = repository.save(mapperDBO.toEntity(saleToSave));
        return mapperDBO.toDomain(saleSaved);
    }
}
