package cue.edu.co.greenswap.application.ports.listeners;

import cue.edu.co.greenswap.domain.events.ExchangeAcceptedEvent;

public interface ExchangeEventListener {
    void onExchangeAcceptedEvent(ExchangeAcceptedEvent event);
}
