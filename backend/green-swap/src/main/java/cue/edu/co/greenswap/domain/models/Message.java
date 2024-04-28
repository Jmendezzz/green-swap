package cue.edu.co.greenswap.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class Message {
  private Long id;
  private User sender;
  private String content;
  private LocalDateTime createdAt;
}
