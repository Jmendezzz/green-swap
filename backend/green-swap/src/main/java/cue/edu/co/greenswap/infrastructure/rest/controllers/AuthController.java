package cue.edu.co.greenswap.infrastructure.rest.controllers;

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

  @PostMapping("/signup")
  public ResponseEntity<AuthResponseDTO> signUp(@RequestBody @Valid AuthSignupRequestDTO authSignupRequestDTO) {
    return ResponseEntity.ok(service.signUp(authSignupRequestDTO));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthLoginRequestDTO authLoginRequestDTO){
    return ResponseEntity.ok(service.login(authLoginRequestDTO));
  }
  @GetMapping("/test")
  public ResponseEntity<String> test(){
    return ResponseEntity.ok("Test");
  }
}
