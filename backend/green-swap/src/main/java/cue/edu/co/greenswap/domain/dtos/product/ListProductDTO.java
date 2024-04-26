package cue.edu.co.greenswap.domain.dtos.product;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Quality;

public record ListProductDTO(
    Long id,
    String name,
    String description,
    Double price,
    String urlImage,
    Category category,
    Quality quality
) {
}
