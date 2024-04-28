package cue.edu.co.greenswap.domain.dtos.product;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import cue.edu.co.greenswap.domain.enums.Quality;

import java.time.LocalDateTime;

public record ProductDTO(
    Long id,
    String name,
    String description,
    UserDTO owner,
    Double price,
    Category category,
    String urlImage,
    Quality quality,
    ProductStatus status,
    LocalDateTime createdAt
) {
}
