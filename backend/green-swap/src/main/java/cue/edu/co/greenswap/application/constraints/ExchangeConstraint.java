package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.ExchangeConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.ExchangeRepository;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import cue.edu.co.greenswap.domain.models.Exchange;
import cue.edu.co.greenswap.infrastructure.exceptions.ExchangeException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@AllArgsConstructor
public class ExchangeConstraint {
  private final ExchangeRepository repository;
  public void validateProductOfferedOwner(ProductDTO productOffered){
    String authenticatedUser = SecurityContextHolder.getContext().getAuthentication().getName();
    if(!productOffered.owner().email().equals(authenticatedUser)){
      throw new ExchangeException(ExchangeConstantMessage.NOT_OWNER_PRODUCT_OFFERED, HttpStatus.FORBIDDEN);
    }
  }

    public void validateProductRequestedOwner(Exchange exchange) {
      String authenticatedUser = SecurityContextHolder.getContext().getAuthentication().getName();
      if(!exchange.getProductRequested().getOwner().getEmail().equals(authenticatedUser)) {
        throw new ExchangeException(ExchangeConstantMessage.NOT_OWNER_PRODUCT_REQUESTED, HttpStatus.FORBIDDEN);
      }
    }

  public Exchange validateExchangeExists(Long id) {
    Optional<Exchange> exchange = repository.findById(id);
    if (exchange.isEmpty()) {
      throw new ExchangeException(
              String.format(ExchangeConstantMessage.EXCHANGE_NOT_FOUND, id),
              HttpStatus.NOT_FOUND
      );
    }
    return exchange.get();
  }

  public void validateProductsAvailability(CreateExchangeDTO createExchangeDTO) {

    if(createExchangeDTO.productOffered().status().equals(ProductStatus.EXCHANGED) || createExchangeDTO.productOffered().status().equals(ProductStatus.SOLD)){
      throw new ExchangeException(ExchangeConstantMessage.PRODUCT_OFFERED_NOT_AVAILABLE, HttpStatus.BAD_REQUEST);
    }
    if(createExchangeDTO.productRequested().status().equals(ProductStatus.EXCHANGED) || createExchangeDTO.productRequested().status().equals(ProductStatus.SOLD)){
      throw new ExchangeException(ExchangeConstantMessage.PRODUCT_REQUESTED_NOT_AVAILABLE, HttpStatus.BAD_REQUEST);
    }
  }
}
