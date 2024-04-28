package cue.edu.co.greenswap.domain.dtos.exchange;

import cue.edu.co.greenswap.domain.dtos.product.ProductDTO;

public record CreateExchangeDTO(
        ProductDTO productRequested,
        ProductDTO productOffered

) {
}
