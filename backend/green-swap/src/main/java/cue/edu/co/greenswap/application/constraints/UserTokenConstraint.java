package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.UserTokenMessage;
import cue.edu.co.greenswap.application.ports.persistence.UserTokenRepository;
import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.domain.models.UserToken;
import cue.edu.co.greenswap.infrastructure.exceptions.UserTokenException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Optional;

@Component
@AllArgsConstructor
public class UserTokenConstraint {
    private UserTokenRepository repository;
    public UserToken validateToken(String token){
        return repository
                .findByToken(token)
                .orElseThrow(() -> new UserTokenException(
                        UserTokenMessage.TOKEN_NOT_FOUND,
                        HttpStatus.NOT_FOUND));
    }
    public void validateTokenType(String token, TokenType tokenType){
        if(!repository.findByToken(token).get().getType().equals(tokenType)){
            throw new UserTokenException(
                    UserTokenMessage.INVALID_TOKEN_TYPE,
                    HttpStatus.BAD_REQUEST);
        }
    }
    public void validateTokenExpired(String token) {
        if(repository.findByToken(token).get().getExpiresAt().isBefore(LocalDateTime.now())){
            throw new UserTokenException(
                    UserTokenMessage.TOKEN_EXPIRED,
                    HttpStatus.BAD_REQUEST);
        }
    }
    public void validateTokenUsed(String token){
        if(repository.findByToken(token).get().getConfirmedAt() != null){
            throw new UserTokenException(
                    UserTokenMessage.TOKEN_ALREADY_USED,
                    HttpStatus.BAD_REQUEST);
        }
    }
    public void validateNonExistingValidTokens(User user) {
        Optional<UserToken> lastToken = repository.findLastUserToken(user);
        if (lastToken.isPresent() && lastToken.get().getExpiresAt().isAfter(LocalDateTime.now())) {
            throw new UserTokenException(
                    UserTokenMessage.TOKEN_ALREADY_SENT,
                    HttpStatus.BAD_REQUEST);
        }
    }
}
