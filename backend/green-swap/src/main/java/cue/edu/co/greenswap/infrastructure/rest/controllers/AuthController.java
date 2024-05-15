package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.ports.usecases.FileService;
import cue.edu.co.greenswap.application.ports.usecases.UserTokenService;
import cue.edu.co.greenswap.domain.dtos.token.UserTokenDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthSignupRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthLoginRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthResponseDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.services.AuthService;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class AuthController {
  private final AuthService service;
  private final FileService fileService;
  private final UserTokenService userTokenService;

  @PostMapping(value = "/signup", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<AuthResponseDTO> signUp(
          @RequestPart("signUpInfo") @Valid AuthSignupRequestDTO authSignupRequestDTO,
          HttpServletResponse response,
          @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
          ) {

    if(profilePicture != null){
      String profilePictureUrl = fileService.uploadFile(profilePicture).get("url").toString();
      AuthSignupRequestDTO withProfilePicture =  authSignupRequestDTO.withProfilePicture(profilePictureUrl);
      return ResponseEntity.ok(service.signUp(withProfilePicture, response));
    }

    return ResponseEntity.ok(service.signUp(authSignupRequestDTO, response));
  }

  @PostMapping("/login")
  public ResponseEntity<AuthResponseDTO> login(@RequestBody AuthLoginRequestDTO authLoginRequestDTO, HttpServletResponse response){
    return ResponseEntity.ok(service.login(authLoginRequestDTO, response));
  }

  @GetMapping("/logout")
  public ResponseEntity<Boolean> logout(HttpServletResponse response){
    return ResponseEntity.ok(service.logout(response));
  }

  @GetMapping("/me")
  public ResponseEntity<UserDTO> me(){
    return service.getUserDetails()
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
  }

  @PostMapping("/confirm-email")
  public ResponseEntity<Boolean> validateUserEmail(@RequestBody UserTokenDTO token){
    return ResponseEntity.ok(userTokenService.confirmEmailToken(token));
  }
}
