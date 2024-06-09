package cue.edu.co.greenswap.infrastructure.adapters.listeners;

import cue.edu.co.greenswap.application.ports.listeners.ExchangeEventListener;
import cue.edu.co.greenswap.domain.events.ExchangeAcceptedEvent;

public class ExchangeEventListenerAdapter implements ExchangeEventListener {
  @Override
  public void onExchangeAcceptedEvent(ExchangeAcceptedEvent event) {

  }
}
