package cue.edu.co.greenswap.application.ports.events;

public interface EventPublisher {
  void publish(Object event);
}
