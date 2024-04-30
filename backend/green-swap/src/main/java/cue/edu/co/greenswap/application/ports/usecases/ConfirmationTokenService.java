package cue.edu.co.greenswap.application.ports.usecases;

import com.sendgrid.Response;
import cue.edu.co.greenswap.domain.dtos.token.ConfirmationTokenDTO;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.domain.models.User;

import java.util.List;
import java.util.Optional;

public interface ConfirmationTokenService {
    ConfirmationToken save(ConfirmationToken confirmationToken);
    Optional<ConfirmationToken> findByToken(String token);
    List<ConfirmationToken> findByUser(User user);
    ConfirmationToken update(ConfirmationToken confirmationToken);
    boolean confirmToken(ConfirmationTokenDTO token);
    Response sendEmailToken();
}
