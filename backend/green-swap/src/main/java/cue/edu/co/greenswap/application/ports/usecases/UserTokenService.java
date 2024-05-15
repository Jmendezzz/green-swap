package cue.edu.co.greenswap.application.ports.usecases;

import com.sendgrid.Response;
import cue.edu.co.greenswap.domain.dtos.token.UserTokenDTO;
import cue.edu.co.greenswap.domain.dtos.user.ResetUserPasswordDTO;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.domain.models.UserToken;

import java.util.List;
import java.util.Optional;

public interface UserTokenService {
    Optional<UserToken> findByToken(String token);
    Optional<UserToken> findLastUserToken(User user);
    boolean confirmEmailToken(UserTokenDTO tokenDto);
    boolean sendEmailValidationToken();
    boolean resetUserPassword(ResetUserPasswordDTO resetUserPasswordDTO);
    boolean sendResetPasswordToken(String email);
}
