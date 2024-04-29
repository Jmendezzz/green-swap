package cue.edu.co.greenswap.infrastructure.rest.controllers;

import com.sendgrid.Response;
import cue.edu.co.greenswap.application.ports.usecases.ConfirmationTokenService;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/mail")
@AllArgsConstructor
public class EmailController {
    private ConfirmationTokenService confirmationTokenService;

    @PostMapping("/send/email/validation")
    public ResponseEntity<Response> sendEmailValidation(){
        return ResponseEntity.ok(confirmationTokenService.sendEmailToken());
    }
}
