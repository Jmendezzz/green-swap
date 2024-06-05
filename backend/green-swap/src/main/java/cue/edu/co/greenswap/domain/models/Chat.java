package cue.edu.co.greenswap.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Chat {
  private Long id;
  private User user1;
  private User user2;
  private List<Message> messages;
  private LocalDateTime createdAt;
}
