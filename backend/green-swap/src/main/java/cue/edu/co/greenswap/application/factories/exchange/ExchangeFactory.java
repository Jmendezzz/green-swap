package cue.edu.co.greenswap.application.factories.exchange;

public interface ExchangeFactory<T,U> {
  T createExchange(U input);
}
