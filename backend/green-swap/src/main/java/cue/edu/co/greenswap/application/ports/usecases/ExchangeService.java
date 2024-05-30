package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Optional;


public interface ExchangeService {
  ExchangeDTO createExchange(CreateExchangeDTO createExchangeDTO);
  Optional<ExchangeDTO> getExchangeById(Long id);
  void deleteExchange(Long id);
  ExchangeDTO acceptExchange(Long id);
  Page<ExchangeDTO> getExchangesOffersByUser(Long userId, Pageable pageable);
  Page<ExchangeDTO> getExchangesRequestedByUser(Long userId, Pageable pageable);
}
