package cue.edu.co.greenswap.application.services;

import com.sendgrid.Response;
import com.sendgrid.helpers.mail.Mail;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.application.constraints.ConfirmationTokenConstraint;
import cue.edu.co.greenswap.application.factories.MailFactory;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ConfirmationTokenRepository;
import cue.edu.co.greenswap.application.ports.usecases.ConfirmationTokenService;
import cue.edu.co.greenswap.application.ports.usecases.EmailService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.token.ConfirmationTokenDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.AuthenticationUtil;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
@AllArgsConstructor
public class ConfirmationTokenServiceImp implements ConfirmationTokenService {
    private final UserMapperDTO userMapperDTO;
    private final EmailService emailService;
    private final MailFactory mailFactory;
    private final ConfirmationTokenRepository repository;
    private final ConfirmationTokenConstraint constraint;
    private final AuthenticationUtil authenticationUtil;
    private final UserService userService;

    @Override
    public ConfirmationToken save(ConfirmationToken confirmationToken) {
        return repository.save(confirmationToken);
    }

    @Override
    public Optional<ConfirmationToken> findByToken(String token) {
        return repository.findByToken(token);
    }

    @Override
    public List<ConfirmationToken> findByUser(User user) {
        return null;
    }

    @Override
    public ConfirmationToken update(ConfirmationToken confirmationToken) {
        return null;
    }

    @Override
    @Transactional
    public boolean confirmToken(ConfirmationTokenDTO token){

        ConfirmationToken validatingToken = constraint.validateToken(token.token());

        constraint.validateTokenExpired(token.token());
        constraint.validateTokenUsed(token.token());

        validatingToken.setConfirmedAt(LocalDateTime.now());
        User user = validatingToken.getUser();
        user.setVerified(true);

        userService.setVerified(userMapperDTO.toDTO(user));

        repository.save(validatingToken);

        return true;
    }

    @Override
    public Response sendEmailToken() {
        UserDTO userDto = authenticationUtil.getUser();

        constraint.validateUserIsConfirmed(userMapperDTO.toDomain(userDto));

        constraint.validateNonExistingValidTokens(userMapperDTO.toDomain(userDto));

        expireLastUserToken(userMapperDTO.toDomain(userDto));

        ConfirmationToken confirmationToken = createToken(userDto);

        ConfirmationToken savedToken = save(confirmationToken);
        String magic_link = EmailConstant.URL_VALIDATE_EMAIL + savedToken.getToken();

        Map<String, Object> properties = new HashMap<>();
        properties.put("to", userDto);
        properties.put("magic_link", magic_link);

        Mail mail = mailFactory.createMail(properties);
        return emailService.sendEmail(mail);
    }

    private ConfirmationToken createToken(UserDTO user){
        String emailToken = UUID.randomUUID().toString();
        return ConfirmationToken.builder()
                .token(emailToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(EmailConstant.TOKEN_EXPIRATION_TIME))
                .build();
    }

    private void expireLastUserToken(User user){
        List<ConfirmationToken> tokens = repository.findByUser(user);
        tokens.forEach(token -> {
            token.setExpiresAt(LocalDateTime.now());
            repository.save(token);
        });
    }
}
