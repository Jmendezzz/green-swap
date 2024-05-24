package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Sale;

public interface SaleRepository {
    Sale save(Sale saleToSave);
}
