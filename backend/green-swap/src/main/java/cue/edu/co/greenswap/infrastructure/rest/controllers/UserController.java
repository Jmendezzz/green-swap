package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/user")
public class UserController {
  private final UserService service;
  @GetMapping("/products")
  public ResponseEntity<Page<ListProductDTO>> getUserProducts(@PageableDefault(page = 0, size = 20) Pageable pageable) {
    return ResponseEntity.ok(service.getUserProducts(pageable));
  }
}
