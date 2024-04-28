package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Exchange;

import java.util.List;
import java.util.Optional;

public interface ExchangeRepository {
  Exchange save(Exchange exchange);
  Optional<Exchange> findById(Long id);
  List<Exchange> findByProduct(Long productId);
  void deleteById(Long id);

}
