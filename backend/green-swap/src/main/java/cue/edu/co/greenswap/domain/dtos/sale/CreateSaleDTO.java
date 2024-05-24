package cue.edu.co.greenswap.domain.dtos.sale;

import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.enums.PaymentMethod;

public record CreateSaleDTO(
        ProductDTO product,
        PaymentMethod paymentMethod
) {
}
