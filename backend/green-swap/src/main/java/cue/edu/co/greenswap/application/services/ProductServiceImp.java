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

  @Override
  public ProductDTO create(CreateProductDTO product) {
    Product productSaved =  repository.save(mapper.toDomain(product));
    return mapper.toDTO(productSaved);
  }
  @Override
  public Optional<ProductDTO> getById(Long id) {
    return repository.findById(id).map(mapper::toDTO);
  }

  @Override
  public Page<ListProductDTO> getBySearchCriteria(SearchCriteriaProduct searchCriteriaProduct, Pageable pageable) {
    Page<Product> products = repository.findBySearchCriteria(searchCriteriaProduct, pageable);
    return new PageImpl<>(mapper.toDTO(products.getContent()), pageable, products.getTotalElements());
  }
}
