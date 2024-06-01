package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface ExchangeRepositoryJpa extends JpaRepository<ExchangeEntity, Long> {
  List<ExchangeEntity> findByProductOfferedId(Long productId);
  List<ExchangeEntity> findAllByProductRequestedId(Long id);
  Page<ExchangeEntity> findAllByProductOffered_Owner_Id(Long userId, Pageable pageable);
  Page<ExchangeEntity> findAllByProductRequested_Owner_Id(Long userId, Pageable pageable);
  List<ExchangeEntity> findAllByProductOfferedId(Long id);
}
