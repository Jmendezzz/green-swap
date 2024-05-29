package cue.edu.co.greenswap.application.factories.token;

import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.domain.models.UserToken;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.UUID;

@Component
public class ResetPasswordToken implements TokenFactory{

    @Override
    public UserToken createUserToken(TokenType type, User user) {
        String token = UUID.randomUUID().toString();
        return UserToken.builder()
                .token(token)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(EmailConstant.RESET_PASSWORD_TOKEN_EXPIRATION_TIME))
                .type(type)
                .user(user)
                .build();
    }
}
