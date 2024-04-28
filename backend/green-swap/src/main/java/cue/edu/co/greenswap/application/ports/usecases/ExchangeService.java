package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;

import java.util.Optional;


public interface ExchangeService {
  ExchangeDTO createExchange(CreateExchangeDTO createExchangeDTO);
  Optional<ExchangeDTO> getExchangeById(Long id);
  void deleteExchange(Long id);

}
