package cue.edu.co.greenswap.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class Report {
  private Long id;
  private String reason;
  private String description;
  private User reporter;
  private User reported;
  private String createdAt;
}
