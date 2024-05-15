package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.ports.usecases.UserTokenService;
import cue.edu.co.greenswap.domain.dtos.token.ResetPasswordRequestDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/mail")
@AllArgsConstructor
public class EmailController {
    private UserTokenService service;

    @PostMapping("/send-email-validation")
    public ResponseEntity<?> sendEmailValidation(){
        return ResponseEntity.ok(service.sendEmailValidationToken());
    }
    @PostMapping("/send-reset-password")
    public ResponseEntity<?> sendResetPasswordEmail(@RequestBody ResetPasswordRequestDTO requestDTO){
        return ResponseEntity.ok(service.sendResetPasswordToken(requestDTO.email()));
    }
}
