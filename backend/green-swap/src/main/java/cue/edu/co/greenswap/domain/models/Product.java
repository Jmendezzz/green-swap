package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Condition;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalTime;
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
  private String urlImage;
  private Condition condition;
  private LocalTime createdAt;
}
