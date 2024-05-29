package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.SaleStatus;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ProductEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
@Builder
public class Sale {
    private Long id;
    private Product product;
    private User buyerUser;

    private SaleStatus status;

    private StripeSession stripeSession;

    private LocalDateTime paymentDate;

    private LocalDateTime createdAt;
}
