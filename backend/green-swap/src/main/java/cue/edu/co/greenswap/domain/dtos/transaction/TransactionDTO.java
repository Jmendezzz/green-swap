package cue.edu.co.greenswap.domain.dtos.transaction;

import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.location.LocationDTO;
import cue.edu.co.greenswap.domain.dtos.sale.SaleDTO;
import cue.edu.co.greenswap.domain.enums.TransactionStatus;

import java.time.LocalDateTime;

public record TransactionDTO(
        Long id,
        ExchangeDTO exchange,
        SaleDTO sale,
        TransactionStatus status,
        LocationDTO shippingLocation,
        LocationDTO returnLocation,
        LocalDateTime createdAt
) {
}
