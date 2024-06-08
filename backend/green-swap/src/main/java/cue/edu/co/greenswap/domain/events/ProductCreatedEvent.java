package cue.edu.co.greenswap.domain.events;

import cue.edu.co.greenswap.domain.models.User;
import lombok.Getter;

@Getter
public class ProductCreatedEvent {
  private final User user;

  public ProductCreatedEvent(User user) {
    this.user = user;
  }

}
