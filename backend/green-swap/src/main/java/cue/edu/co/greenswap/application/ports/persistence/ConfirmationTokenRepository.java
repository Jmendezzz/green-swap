package cue.edu.co.greenswap.application.ports.persistence;


import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.domain.models.User;

import java.util.List;
import java.util.Optional;

public interface ConfirmationTokenRepository {
    ConfirmationToken save(ConfirmationToken confirmationToken);
    Optional<ConfirmationToken> findByToken(String token);
    List<ConfirmationToken> findByUser(User user);
    Optional<ConfirmationToken> findLastUserToken(User user);
    ConfirmationToken update(ConfirmationToken confirmationToken);
}
