package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ExchangeRepositoryJpa extends JpaRepository<ExchangeEntity, Long> {
  List<ExchangeEntity> findByProductOfferedId(Long productId);
}
