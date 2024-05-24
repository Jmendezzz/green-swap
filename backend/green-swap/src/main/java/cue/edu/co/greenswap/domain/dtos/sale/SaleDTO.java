package cue.edu.co.greenswap.domain.dtos.sale;

import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.enums.PaymentMethod;

import java.time.LocalDateTime;

public record SaleDTO(
        Long id,
        ProductDTO productDTO,
        UserDTO userDTO,
        PaymentMethod paymentMethod,
        String stripePaymentIntentId,
        String stripeChargeId,
        String stripePaymentStatus,
        LocalDateTime paymentDate,
        LocalDateTime createdAt
) {
}
