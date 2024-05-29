package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.TransactionStatus;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.LocationEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class Transaction {
    private Long id;
    private ExchangeEntity exchange;
    private SaleEntity sale;
    private TransactionStatus status;
    private LocationEntity shippingLocation;
    private LocationEntity returnLocation;
    private LocalDateTime createdAt;
}
