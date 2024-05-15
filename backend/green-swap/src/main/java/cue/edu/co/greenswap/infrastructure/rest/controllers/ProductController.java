package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.constants.ProductConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.FileService;
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
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {
  private ProductService service;
  private FileService fileService;

  @PostMapping(name="/", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<ProductDTO> createProduct(
          @RequestPart("productInfo") CreateProductDTO product,
          @RequestPart(value = "productImage", required = false) MultipartFile productImage) {

    if(productImage != null){
      String productImageUrl = fileService.uploadFile(productImage).get("url").toString();
      CreateProductDTO createProductWithImage = product.withUrlImage(productImageUrl);
      return ResponseEntity.ok(service.create(createProductWithImage));
    }

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

  @GetMapping("/search-suggestions")
  public ResponseEntity<List<String>> getSearchSuggestions(@RequestParam String query) {
    return ResponseEntity.ok(
            service.getSearchSuggestions(query)
    );
  }
}
