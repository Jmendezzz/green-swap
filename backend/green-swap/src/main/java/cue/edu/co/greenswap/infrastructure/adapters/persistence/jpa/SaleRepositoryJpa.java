package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepositoryJpa extends JpaRepository<SaleEntity, Long> {
}
