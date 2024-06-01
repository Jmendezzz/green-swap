package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
  private final UserService service;

  @GetMapping("/products")
  public ResponseEntity<Page<ListProductDTO>> getUserProducts(@PageableDefault(page = 0, size = 20) Pageable pageable) {
    return ResponseEntity.ok(service.getUserProducts(pageable));
  }

  @GetMapping("/{userId}")
  public ResponseEntity<UserDTO> getUserById(@PathVariable Long userId) {
    return ResponseEntity.ok(
            service.getById(userId)
                    .orElseThrow(()-> new UserException(
                            UserConstantMessage.USER_NOT_FOUND, HttpStatus.NOT_FOUND
                    ))
    );
  }

  @GetMapping("/exchanges/offers")
  public ResponseEntity<Page<ExchangeDTO>> getUserExchangesOffers(@PageableDefault(page = 0, size = 20) Pageable pageable) {
    return ResponseEntity.ok(service.getUserExchangesOffers(pageable));
  }

  @GetMapping("/notifications")
  public ResponseEntity<List<NotificationDTO>> getUserNotifications() {
    return ResponseEntity.ok(service.getUserNotifications());
  }


    @GetMapping("/exchanges/requested")
    public ResponseEntity<Page<ExchangeDTO>> getUserExchangesRequested(@PageableDefault(page = 0, size = 20) Pageable pageable) {
      return ResponseEntity.ok(service.getUserExchangesRequested(pageable));
    }
}