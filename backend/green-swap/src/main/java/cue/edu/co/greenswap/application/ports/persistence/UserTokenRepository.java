package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.UserToken;
import cue.edu.co.greenswap.domain.models.User;

import java.util.List;
import java.util.Optional;

public interface UserTokenRepository {
    UserToken save(UserToken userToken);
    Optional<UserToken> findByToken(String token);
    List<UserToken> findByUser(User user);
    List<UserToken> findByType(TokenType type);
    Optional<UserToken> findLastUserToken(User user);
    UserToken update(UserToken userToken);
}
