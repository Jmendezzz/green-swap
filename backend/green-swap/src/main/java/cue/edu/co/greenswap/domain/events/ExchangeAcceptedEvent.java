package cue.edu.co.greenswap.domain.events;

import cue.edu.co.greenswap.domain.models.Product;
import lombok.Getter;

@Getter
public class ExchangeAcceptedEvent {
    private final Product productOffered;
    private final Product productRequested;

    public ExchangeAcceptedEvent(Product productOffered, Product productRequested) {
        this.productOffered = productOffered;
        this.productRequested = productRequested;
    }
}
