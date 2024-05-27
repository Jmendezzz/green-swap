package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.product.CreateProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ProductService {
  ProductDTO create(CreateProductDTO product);
  Optional<ProductDTO> getById(Long id);
  Page<ListProductDTO> getBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable);
  Page<ListProductDTO> getByUser(Long userId, Pageable pageable);
  List<String> getSearchSuggestions(String query);
}
