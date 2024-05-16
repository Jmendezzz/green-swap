package cue.edu.co.greenswap.application.factories.mail;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import org.springframework.stereotype.Component;

import java.util.Map;

import static cue.edu.co.greenswap.application.factories.mail.DefaultConfigMail.defaultMail;

@Component
public class ResetPasswordMail implements MailFactory{
    @Override
    public Mail createMail(Map<String, Object> properties) {
        Mail mail = defaultMail(properties);

        mail.setTemplateId(EmailConstant.RESET_PASSWORD_TEMPLATE_ID);
        return mail;
    }
}
