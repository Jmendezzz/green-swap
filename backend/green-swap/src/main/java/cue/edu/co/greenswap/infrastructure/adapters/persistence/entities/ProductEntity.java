package cue.edu.co.greenswap.infrastructure.adapters.persistence.entities;

import cue.edu.co.greenswap.domain.enums.Category;
import cue.edu.co.greenswap.domain.enums.ProductStatus;
import cue.edu.co.greenswap.domain.enums.Quality;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "products")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
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
  @Enumerated(EnumType.STRING)
  private Category category;
  private String urlImage;
  @Enumerated(EnumType.STRING)
  private Quality quality;
  @Enumerated(EnumType.STRING)
  private ProductStatus status;
  @CreatedDate
  @Column(updatable = false, nullable = false)
  private LocalDateTime createdAt;
}
