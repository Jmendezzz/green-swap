package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.ExchangeConstantMessage;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.infrastructure.exceptions.ExchangeException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ExchangeConstraint {
  public void validateProductOfferedOwner(ProductDTO productOffered){
    String authenticatedUser = SecurityContextHolder.getContext().getAuthentication().getName();
    if(!productOffered.owner().email().equals(authenticatedUser)){
      throw new ExchangeException(ExchangeConstantMessage.NOT_OWNER_PRODUCT_OFFERED, HttpStatus.FORBIDDEN);
    }
  }
}
