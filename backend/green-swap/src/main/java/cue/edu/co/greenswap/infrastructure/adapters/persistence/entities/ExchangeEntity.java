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
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity(name = "exchanges")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@EntityListeners(AuditingEntityListener.class)
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
  @CreatedDate
  private LocalDateTime createdAt;
}
