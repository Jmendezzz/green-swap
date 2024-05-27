package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.constants.ExchangeConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.ExchangeService;
import cue.edu.co.greenswap.domain.dtos.exchange.CreateExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.infrastructure.exceptions.ExchangeException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exchanges")
@AllArgsConstructor
public class ExchangeController {
  private final ExchangeService service;

  @PostMapping
  public ResponseEntity<ExchangeDTO> create(@RequestBody CreateExchangeDTO createExchangeDTO) {
    return ResponseEntity.ok(service.createExchange(createExchangeDTO));
  }

  @GetMapping("/{id}")
  public ResponseEntity<ExchangeDTO> getById(@PathVariable Long id) {
    return service.getExchangeById(id)
      .map(ResponseEntity::ok)
      .orElseThrow(() -> new ExchangeException(
              String.format(ExchangeConstantMessage.EXCHANGE_NOT_FOUND, id),
              HttpStatus.NOT_FOUND
      ));
  }

  @GetMapping("/{id}/accept")
  public ResponseEntity<ExchangeDTO> accept(@PathVariable Long id) {
    return ResponseEntity.ok(service.acceptExchange(id));
  }
}
