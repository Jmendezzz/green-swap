package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;

import java.util.List;

public interface ProductRepository {
  Product save(Product product);
  Product findById(Long id);
  List<Product> findAll(Pageable pageable);

  Page<Product> findBySearchCriteria(Specification<Product> specification, Pageable pageable);


}
