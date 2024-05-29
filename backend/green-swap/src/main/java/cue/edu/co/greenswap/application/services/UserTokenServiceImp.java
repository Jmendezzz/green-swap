package cue.edu.co.greenswap.application.services;

import com.sendgrid.Response;
import com.sendgrid.helpers.mail.Mail;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.constraints.UserConstraint;
import cue.edu.co.greenswap.application.constraints.UserTokenConstraint;
import cue.edu.co.greenswap.application.factories.mail.EmailValidationMail;
import cue.edu.co.greenswap.application.factories.mail.ResetPasswordMail;
import cue.edu.co.greenswap.application.factories.token.EmailValidationToken;
import cue.edu.co.greenswap.application.factories.token.ResetPasswordToken;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.UserTokenRepository;
import cue.edu.co.greenswap.application.ports.usecases.EmailService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.application.ports.usecases.UserTokenService;
import cue.edu.co.greenswap.domain.dtos.token.UserTokenDTO;
import cue.edu.co.greenswap.domain.dtos.user.ResetUserPasswordDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.domain.models.UserToken;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.AuthenticationUtil;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@AllArgsConstructor
public class UserTokenServiceImp implements UserTokenService {
    //Mapper
    private final UserMapperDTO userMapperDTO;
    //Services
    private final EmailService emailService;
    private final UserService userService;
    //Factories
    private final EmailValidationMail validationMailFactory;
    private final ResetPasswordMail resetPasswordMailFactory;
    private final EmailValidationToken validationMailTokenFactory;
    private final ResetPasswordToken resetPasswordTokenFactory;
    //Repository
    private final UserTokenRepository repository;
    //Constraint
    private final UserTokenConstraint userTokenConstraint;
    private final UserConstraint userConstraint;
    //Util
    private final AuthenticationUtil authenticationUtil;

    @Override
    public Optional<UserToken> findByToken(String token) {
        return repository.findByToken(token);
    }
    @Override
    public Optional<UserToken> findLastUserToken(User user){
        return repository.findLastUserToken(user);
    }

    @Override
    @Transactional
    public boolean confirmEmailToken(UserTokenDTO tokenDto){

        UserToken validatingToken = userTokenConstraint.validateToken(tokenDto.token());

        userTokenConstraint.validateTokenType(tokenDto.token(), TokenType.VALIDATE_MAIL);
        userTokenConstraint.validateTokenExpired(tokenDto.token());
        userTokenConstraint.validateTokenUsed(tokenDto.token());

        validatingToken.setConfirmedAt(LocalDateTime.now());
        User user = validatingToken.getUser();
        user.setVerified(true);

        userService.setVerified(userMapperDTO.toDTO(user));

        update(validatingToken);

        return true;
    }

    @Override
    public boolean sendEmailValidationToken() {
        UserDTO userDto = authenticationUtil.getUser();

        userConstraint.validateUserIsConfirmed(userMapperDTO.toDomain(userDto));

        userTokenConstraint.validateNonExistingValidTokens(userMapperDTO.toDomain(userDto));

        expireLastUserToken(userMapperDTO.toDomain(userDto));

        UserToken confirmationToken = validationMailTokenFactory.createUserToken(TokenType.VALIDATE_MAIL, userMapperDTO.toDomain(userDto));

        UserToken savedToken = save(confirmationToken);
        String magic_link = EmailConstant.URL_VALIDATE_EMAIL + savedToken.getToken();

        Map<String, Object> properties = new HashMap<>();
        properties.put("to", userDto);
        properties.put("magic_link", magic_link);

        Mail mail = validationMailFactory.createMail(properties);
        return emailService.sendEmail(mail);
    }

    @Override
    public boolean sendResetPasswordToken(String email) {
        Optional<UserDTO> userDto = userService.getByEmail(email);
        if (userDto.isEmpty()){
            throw new UserException(UserConstantMessage.INVALID_EMAIL, HttpStatus.NOT_FOUND);
        }
        userTokenConstraint.validateNonExistingValidTokens(userMapperDTO.toDomain(userDto.get()));

        UserToken resetPasswordToken = resetPasswordTokenFactory.createUserToken(TokenType.RESET_PASSWORD, userMapperDTO.toDomain(userDto.get()));
        UserToken savedToken = save(resetPasswordToken);

        String magic_link = EmailConstant.URL_RESET_PASSWORD + savedToken.getToken();

        Map<String, Object> properties = new HashMap<>();
        properties.put("to", userDto.get());
        properties.put("magic_link", magic_link);

        Mail mail = resetPasswordMailFactory.createMail(properties);
        return emailService.sendEmail(mail);
    }

    @Override
    public boolean resetUserPassword(ResetUserPasswordDTO resetUserPasswordDTO){
        UserToken validatingToken = userTokenConstraint.validateToken(resetUserPasswordDTO.token());

        userTokenConstraint.validateTokenType(resetUserPasswordDTO.token(), TokenType.RESET_PASSWORD);
        userTokenConstraint.validateTokenExpired(resetUserPasswordDTO.token());
        userTokenConstraint.validateTokenUsed(resetUserPasswordDTO.token());

        validatingToken.setConfirmedAt(LocalDateTime.now());
        update(validatingToken);
        userService.resetPassword(validatingToken.getUser().getEmail(), resetUserPasswordDTO.password(), resetUserPasswordDTO.confirmPassword());
        return true;
    }

    private UserToken save(UserToken userToken) {
        return repository.save(userToken);
    }

    private void expireLastUserToken(User user){
        List<UserToken> tokens = findByUser(user);
        tokens.forEach(token -> {
            token.setExpiresAt(LocalDateTime.now());
            update(token);
        });
    }

    private void update(UserToken userToken) {
        repository.update(userToken);
    }

    private List<UserToken> findByUser(User user) {
        return repository.findByUser(user);
    }

}
