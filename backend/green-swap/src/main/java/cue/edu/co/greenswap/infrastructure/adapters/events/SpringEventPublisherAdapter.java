package cue.edu.co.greenswap.infrastructure.adapters.events;

import cue.edu.co.greenswap.application.ports.events.EventPublisher;
import lombok.AllArgsConstructor;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class SpringEventPublisherAdapter implements EventPublisher {
  private final ApplicationEventPublisher applicationEventPublisher;
  @Override
  public void publish(Object event) {
    applicationEventPublisher.publishEvent(event);
  }
}
