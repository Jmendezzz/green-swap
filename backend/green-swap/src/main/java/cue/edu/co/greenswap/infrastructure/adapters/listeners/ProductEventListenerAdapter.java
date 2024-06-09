package cue.edu.co.greenswap.infrastructure.adapters.listeners;

import cue.edu.co.greenswap.application.constants.CoinConstant;
import cue.edu.co.greenswap.application.ports.listeners.ProductEventListener;
import cue.edu.co.greenswap.application.ports.usecases.CoinService;
import cue.edu.co.greenswap.domain.events.ProductCreatedEvent;
import lombok.AllArgsConstructor;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ProductEventListenerAdapter implements ProductEventListener {
  private final CoinService coinService;

  @Override
  @EventListener
  public void onProductCreatedEvent(ProductCreatedEvent event) {
    coinService.addCoins(event.getUser(), CoinConstant.COINS_GIVEN_BY_CREATING_PRODUCT);
  }
}
