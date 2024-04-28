package cue.edu.co.greenswap.domain.dtos.exchange;

import cue.edu.co.greenswap.domain.dtos.message.ChatDTO;
import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;
import cue.edu.co.greenswap.domain.enums.ExchangeStatus;

import java.time.LocalDateTime;

public record ExchangeDTO(
        Long id,
        ProductDTO productRequested,
        ProductDTO productOffered,
        ExchangeStatus status,
        ChatDTO chat,
        LocalDateTime createdAt
) {
}
