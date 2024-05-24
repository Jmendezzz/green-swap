package cue.edu.co.greenswap.infrastructure.adapters.persistence.entities;

import cue.edu.co.greenswap.domain.enums.PaymentMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "sales")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
public class SaleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    private ProductEntity product;
    @ManyToOne
    private UserEntity buyerUser;
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    private String stripePaymentIntentId;
    private String stripeChargeId;
    private String stripePaymentStatus;

    private LocalDateTime paymentDate;

    private LocalDateTime createdAt;
}
