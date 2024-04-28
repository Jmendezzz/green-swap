package cue.edu.co.greenswap.infrastructure.adapters.persistence.entities;

import cue.edu.co.greenswap.domain.enums.ExchangeStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.springframework.data.annotation.CreatedBy;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class ExchangeEntity {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne
  private ProductEntity productRequested;
  @ManyToOne
  private ProductEntity productOffered;

  @Enumerated(EnumType.STRING)
  private ExchangeStatus status;
  @OneToOne
  @Cascade(CascadeType.ALL)
  private ChatEntity chat;
  @CreatedBy
  private LocalDateTime createdAt;
}
