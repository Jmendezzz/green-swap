package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.constants.ProductConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.ProductService;
import cue.edu.co.greenswap.domain.dtos.product.CreateProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria.SearchCriteriaProduct;
import cue.edu.co.greenswap.infrastructure.exceptions.ProductException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {
  private ProductService service;

  @PostMapping
  public ResponseEntity<ProductDTO> createProduct(@RequestBody CreateProductDTO product) {
    return ResponseEntity.ok(service.create(product));
  }

  @GetMapping("/{id}")
  public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
    Optional<ProductDTO> product = service.getById(id);

    return product
            .map(ResponseEntity::ok)
            .orElseThrow(() -> new ProductException(String.format(ProductConstantMessage.PRODUCT_NOT_FOUND, id),
                    HttpStatus.NOT_FOUND)
            );
  }

  @PostMapping("/search")
  public ResponseEntity<Page<ListProductDTO>> getProducts(@PageableDefault(page = 0, size = 20) Pageable pageable,
                                                          @RequestBody SearchCriteriaProduct searchCriteriaProduct) {
    return ResponseEntity.ok(
            service.getBySearchCriteria(searchCriteriaProduct, pageable)
    );
  }
}
