package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.ports.persistence.ConfirmationTokenRepository;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ConfirmationTokenConstraint {
    private ConfirmationTokenRepository repository;
    public ConfirmationToken validateToken(String token) {
        return repository.findByToken(token).orElseThrow(() -> new RuntimeException("Token not found"));
    }
    public void validateTokenExpired(String token) {
        if (repository.findByToken(token).get().getExpiresAt().isBefore(java.time.LocalDateTime.now())) {
            throw new RuntimeException("Token expired");
        }
    }
    public void validateTokenUsed(String token) {
        if (repository.findByToken(token).get().getConfirmedAt() != null) {
            throw new RuntimeException("Token already used");
        }
    }
}
