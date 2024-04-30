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
    public boolean confirmToken(String token) {
        ConfirmationToken validatingToken = constraint.validateToken(token);
        constraint.validateTokenExpired(token);
        constraint.validateTokenUsed(token);
        validatingToken.setConfirmedAt(java.time.LocalDateTime.now());

        User user = validatingToken.getUser();
        user.setVerified(true);
        userService.setVerified(userMapperDTO.toDTO(user));
        repository.save(validatingToken);

        return true;
    }

    @Override
    public Response sendEmailToken() {
        UserDTO userDto = authenticationUtil.getUser();

        if (userDto.isVerified()) return null;

        expireLastToken(userMapperDTO.toDomain(userDto));

        String emailToken = UUID.randomUUID().toString();
        ConfirmationToken confirmationToken = ConfirmationToken.builder()
                .token(emailToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(EmailConstant.TOKEN_EXPIRATION_TIME))
                .user(userMapperDTO.toDomain(userDto))
                .build();

        ConfirmationToken savedToken = this.save(confirmationToken);
        String magic_link = EmailConstant.URL_VALIDATE_EMAIL + savedToken.getToken();

        Map<String, Object> properties = new HashMap<>();
        properties.put("to", userDto);
        properties.put("magic_link", magic_link);

        Mail mail = mailFactory.createMail(properties);
        return emailService.sendEmail(mail);
    }

    private void expireLastToken(User user){
        List<ConfirmationToken> tokens = repository.findByUser(user);
        tokens.forEach(token -> {
            token.setExpiresAt(LocalDateTime.now());
            repository.save(token);
        });
    }
}
