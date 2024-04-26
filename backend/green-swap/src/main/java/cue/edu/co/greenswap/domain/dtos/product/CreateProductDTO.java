package cue.edu.co.greenswap.domain.dtos.product;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Quality;
import cue.edu.co.greenswap.domain.enums.Status;

public record CreateProductDTO(
    String name,
    String description,
    Double price,
    Category category,
    String urlImage,
    Quality quality,
    Status status
) {
}
