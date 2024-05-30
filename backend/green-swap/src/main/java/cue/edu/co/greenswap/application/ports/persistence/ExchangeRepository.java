package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Exchange;
import cue.edu.co.greenswap.domain.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ExchangeRepository {
  Exchange save(Exchange exchange);
  Optional<Exchange> findById(Long id);
  List<Exchange> findByProduct(Long productId);
  void deleteById(Long id);
  List<Exchange> findAllByProductRequested(Product productRequested);
  Page<Exchange> findAllOffersByUser(Long userId, Pageable pageable);
  Page<Exchange> findAllRequestedByUser(Long userId, Pageable pageable);
}
