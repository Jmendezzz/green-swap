package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.PaymentMethod;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class Sale {
    private Long id;
    private ProductEntity product;
    private UserEntity buyerUser;
    private PaymentMethod paymentMethod;

    private String stripePaymentIntentId;
    private String stripeChargeId;
    private String stripePaymentStatus;

    private LocalDateTime paymentDate;

    private LocalDateTime createdAt;
}
