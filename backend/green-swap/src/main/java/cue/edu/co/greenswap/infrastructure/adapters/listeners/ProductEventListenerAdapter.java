package cue.edu.co.greenswap.infrastructure.adapters.listeners;

import cue.edu.co.greenswap.application.ports.listeners.ProductEventListener;
import cue.edu.co.greenswap.domain.events.ProductCreatedEvent;
import org.springframework.context.event.EventListener;

public class ProductEventListenerAdapter implements ProductEventListener {

  @Override
  @EventListener
  public void onProductCreatedEvent(ProductCreatedEvent event) {



  }
}
