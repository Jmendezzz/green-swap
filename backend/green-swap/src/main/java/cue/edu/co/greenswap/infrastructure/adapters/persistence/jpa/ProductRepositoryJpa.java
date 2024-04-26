package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepositoryJpa extends JpaRepository<ProductEntity, Long> {
}
