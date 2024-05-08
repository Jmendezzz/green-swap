package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.mappers.ProductMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ProductRepository;
import cue.edu.co.greenswap.application.ports.usecases.ProductService;
import cue.edu.co.greenswap.domain.dtos.product.CreateProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class ProductServiceImp implements ProductService {
  private ProductRepository repository;
  private ProductMapperDTO mapper;

  /**
   * Creates a new product based on the provided data.
   *
   * @param product the data for the product to be created
   * @return the DTO representation of the created product
   */
  @Override
  public ProductDTO create(CreateProductDTO product) {
    Product productSaved =  repository.save(mapper.toDomain(product));
    return mapper.toDTO(productSaved);
  }

  /**
   * Retrieves the product with the specified ID.
   *
   * @param id the ID of the product to retrieve
   * @return an Optional containing the DTO representation of the product if found, or empty if not found
   */
  @Override
  public Optional<ProductDTO> getById(Long id) {
    return repository.findById(id).map(mapper::toDTO);
  }

  /**
   * Retrieves a page of products based on the provided search criteria.
   *
   * @param searchCriteriaProduct the search criteria for filtering products
   * @param pageable the pagination information
   * @return a Page containing a list of DTO representations of products matching the search criteria
   */
  @Override
  public Page<ListProductDTO> getBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable) {
    Page<Product> products = repository.findBySearchCriteria(searchCriteriaProduct, pageable);
    return new PageImpl<>(mapper.toDTO(products.getContent()), pageable, products.getTotalElements());
  }
}
