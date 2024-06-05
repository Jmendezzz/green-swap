package cue.edu.co.greenswap.domain.dtos.transaction;

import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.enums.TransactionStatus;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ExchangeEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.LocationEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.SaleEntity;

import java.time.LocalDateTime;

public record TransactionDTO(
        Long id,
        ExchangeDTO exchange,
        SaleEntity sale,
        TransactionStatus status,
        LocationEntity shippingLocation, //TODO: DTO
        LocationEntity returnLocation, //TODO: DTO
        LocalDateTime createdAt
) {
}
