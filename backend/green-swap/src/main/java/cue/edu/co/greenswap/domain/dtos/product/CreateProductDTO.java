package cue.edu.co.greenswap.domain.dtos.product;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Condition;

public record CreateProductDTO(
    String name,
    String description,
    Double price,
    Category category,
    String urlImage,
    Condition condition
) {
}
