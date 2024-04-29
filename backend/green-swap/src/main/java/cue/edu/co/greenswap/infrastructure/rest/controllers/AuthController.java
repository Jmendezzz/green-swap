package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.ports.usecases.ConfirmationTokenService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.token.ConfirmationTokenDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthSignupRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthLoginRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthResponseDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.services.AuthService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
  private final AuthService service;
  private final UserService userService;
  private final ConfirmationTokenService confirmationTokenService;

  @PostMapping("/signup")
  public ResponseEntity<AuthResponseDTO> signUp(@RequestBody @Valid AuthSignupRequestDTO authSignupRequestDTO) {
    return ResponseEntity.ok(service.signUp(authSignupRequestDTO));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthLoginRequestDTO authLoginRequestDTO){
    return ResponseEntity.ok(service.login(authLoginRequestDTO));
  }

  @PostMapping("/confirm/email")
  public ResponseEntity<Boolean> validateUserEmail(@RequestBody ConfirmationTokenDTO token){
    return ResponseEntity.ok(confirmationTokenService.confirmToken(token.token()));
  }
}
