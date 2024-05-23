package cue.edu.co.greenswap.application.factories.token;

import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.domain.models.UserToken;

public interface TokenFactory {
    UserToken createUserToken(TokenType type, User user);
}
