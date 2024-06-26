package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ExchangeRepository;
import cue.edu.co.greenswap.domain.models.Exchange;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.ExchangeRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.ExchangeMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class ExchangeRepositoryJpaAdapter implements ExchangeRepository {
  private final ExchangeRepositoryJpa repository;
  private final ExchangeMapperDBO mapper;

  @Override
  public Exchange save(Exchange exchange) {
    ExchangeEntity exchangeSaved =  repository.save(mapper.toEntity(exchange));
    return mapper.toDomain(exchangeSaved);
  }

  @Override
  public Optional<Exchange> findById(Long id) {
    return repository.findById(id).map(mapper::toDomain);
  }

  @Override
  public List<Exchange> findByProduct(Long productId) {
    List<ExchangeEntity> exchanges = repository.findByProductOfferedId(productId);
    return mapper.toDomain(exchanges);

  }

  @Override
  public void deleteById(Long id) {
    repository.deleteById(id);
  }

  @Override
  public List<Exchange> findAllByProductRequested(Product productRequested) {
    List<ExchangeEntity> exchanges = repository.findAllByProductRequestedId(productRequested.getId());
    return mapper.toDomain(exchanges);
  }

  @Override
  public List<Exchange> findAllByProductOfferedId(Long productOfferedId) {
    List<ExchangeEntity> exchanges = repository.findAllByProductOfferedId(productOfferedId);
    return mapper.toDomain(exchanges);
  }

  @Override
  public Page<Exchange> findAllOffersByUser(Long userId, Pageable pageable) {
    return repository.findAllByProductRequested_Owner_Id(userId, pageable).map(mapper::toDomain);
  }

  @Override
  public Page<Exchange> findAllRequestedByUser(Long userId, Pageable pageable) {
    return repository.findAllByProductOffered_Owner_Id(userId, pageable).map(mapper::toDomain);
  }
}
