package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.product.CreateProductDTO;
import cue.edu.co.greenswap.domain.models.Product;

import java.util.Optional;

public interface ProviderService {
  Product create(CreateProductDTO product);
  Optional<Product> getById(Long id);
}
