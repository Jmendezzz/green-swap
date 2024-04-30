package cue.edu.co.greenswap.application.factories;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class EmailValidationMail implements MailFactory{
    @Override
    public Mail createMail(Map<String, Object> properties) {
        UserDTO user = (UserDTO) properties.get("to");
        String magic_link = (String) properties.get("magic_link");

        Mail mail = new Mail();
        mail.setFrom(new Email(EmailConstant.FROM_EMAIL));
        mail.setReplyTo(new Email(EmailConstant.REPLY_EMAIL));

        Personalization personalization = new Personalization();
        personalization.addDynamicTemplateData("username", user.firstName());
        personalization.addDynamicTemplateData("magic_link", magic_link);
        personalization.addTo(new Email(user.email()));
        mail.addPersonalization(personalization);

        mail.setTemplateId(EmailConstant.SIGNUP_TEMPLATE_ID);
        return mail;
    }
}
