package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.ConfirmationTokenMessage;
import cue.edu.co.greenswap.application.ports.persistence.ConfirmationTokenRepository;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.exceptions.ConfirmationTokenException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class ConfirmationTokenConstraint {
    private ConfirmationTokenRepository repository;
    public ConfirmationToken validateToken(String token) {
        return repository
                .findByToken(token)
                .orElseThrow(() -> new ConfirmationTokenException(
                        ConfirmationTokenMessage.TOKEN_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }
    public void validateTokenExpired(String token) {
        if (repository.findByToken(token).get().getExpiresAt().isBefore(java.time.LocalDateTime.now())) {
            throw new ConfirmationTokenException(
                    ConfirmationTokenMessage.TOKEN_EXPIRED,
                    HttpStatus.BAD_REQUEST);
        }
    }
    public void validateTokenUsed(String token) {
        if (repository.findByToken(token).get().getConfirmedAt() != null) {
            throw new ConfirmationTokenException(
                    ConfirmationTokenMessage.TOKEN_ALREADY_USED,
                    HttpStatus.BAD_REQUEST);
        }
    }

    public void validateUserIsConfirmed(User user) {
        if (user.isVerified()) {
            throw new ConfirmationTokenException(
                    ConfirmationTokenMessage.USER_ALREADY_CONFIRMED,
                    HttpStatus.BAD_REQUEST);
        }
    }
}
