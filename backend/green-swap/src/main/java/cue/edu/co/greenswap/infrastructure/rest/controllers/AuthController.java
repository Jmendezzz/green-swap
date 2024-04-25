package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthSignupRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthLoginRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthResponseDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.services.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
  private final AuthService service;

  @PostMapping("/signup")
  public ResponseEntity<AuthResponseDTO> signUp(@RequestBody AuthSignupRequestDTO authSignupRequestDTO) {
    return ResponseEntity.ok(service.signUp(authSignupRequestDTO));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthLoginRequestDTO authLoginRequestDTO){
    return ResponseEntity.ok(service.login(authLoginRequestDTO));
  }


}
