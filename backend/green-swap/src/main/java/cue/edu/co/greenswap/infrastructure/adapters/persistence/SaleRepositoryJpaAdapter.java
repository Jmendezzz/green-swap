package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.SaleRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class SaleRepositoryJpaAdapter implements SaleRepository {
}
