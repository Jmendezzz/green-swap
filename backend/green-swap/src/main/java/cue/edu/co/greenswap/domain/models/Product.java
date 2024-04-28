package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Quality;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class Product {
  private Long id;
  private User owner;
  private String name;
  private String description;
  private Double price;
  private Category category;
  private ProductStatus status;
  private String urlImage;
  private Quality quality;
  private LocalDateTime createdAt;
}
