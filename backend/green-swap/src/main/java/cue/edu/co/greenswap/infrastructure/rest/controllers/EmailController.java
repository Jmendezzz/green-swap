package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.ports.usecases.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
@AllArgsConstructor
public class EmailController {
    private ConfirmationTokenService service;
    @PostMapping("/send-email-validation")
    public ResponseEntity<?> sendEmailValidation(){
        service.sendEmailToken();
        return ResponseEntity.ok().build();
    }
}
