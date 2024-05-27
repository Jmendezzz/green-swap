package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;
import java.util.Optional;

public interface ProductRepository {
  Product save(Product product);
  Optional<Product> findById(Long id);
  List<Product> findAll(Pageable pageable);
  Page<Product> findByUser(Long userId, Pageable pageable);
  Page<Product> findBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable);
  List<String> findSearchSuggestions(String query);

}
