package cue.edu.co.greenswap.domain.dtos.sale;

import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.time.LocalDateTime;

public record SaleDTO(
        Long id,
        ProductDTO productDTO,
        UserDTO userDTO,
        String stripePaymentIntentId,
        String stripeChargeId,
        String stripePaymentStatus,
        LocalDateTime paymentDate,
        LocalDateTime createdAt
) {
}
