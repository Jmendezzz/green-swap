package cue.edu.co.greenswap.infrastructure.adapters.persistence.searchcriteria;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Quality;

public record SearchCriteriaProduct(
        String name,
        Double minPrice,
        Double maxPrice,
        Category category,
        Quality quality
) {
}
