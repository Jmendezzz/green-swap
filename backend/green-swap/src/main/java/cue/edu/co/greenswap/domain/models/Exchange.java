package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.domain.enums.ExchangeStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class Exchange {
  private Long id;
  private Product productRequested;
  private Product productOffered;
  private ExchangeStatus status;
  private Chat chat;
  private LocalDateTime createdAt;
}
