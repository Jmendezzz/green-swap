package cue.edu.co.greenswap.infrastructure.adapters.persistence.entities;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.Condition;
import cue.edu.co.greenswap.domain.models.User;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalTime;

@Entity
public class ProductEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne
  @CreatedBy
  private UserEntity owner;
  private String name;
  private String description;

  private Double price;
  @Enumerated
  private Category category;
  private String urlImage;
  @Enumerated
  private Condition condition;

  @CreatedDate
  @Column(updatable = false, nullable = false)
  private LocalTime createdAt;
}
