package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.SaleConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.ProductRepository;
import cue.edu.co.greenswap.domain.models.Product;
import cue.edu.co.greenswap.infrastructure.exceptions.SaleException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@AllArgsConstructor
public class SaleConstraint {
    private final ProductRepository repository;

    public Product validateProductExists(Long productId) {
        Optional<Product> product = repository.findById(productId);
        if (product.isEmpty()) {
            throw new SaleException(String.format(SaleConstantMessage.SALE_NOT_FOUND, productId),
            HttpStatus.NOT_FOUND
            );
        }
        return product.get();
    }
}
