package cue.edu.co.greenswap.application.ports.listeners;

import cue.edu.co.greenswap.domain.events.ProductCreatedEvent;

public interface ProductEventListener {
    void onProductCreatedEvent(ProductCreatedEvent event);
}
