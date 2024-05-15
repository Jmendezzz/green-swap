package cue.edu.co.greenswap.application.factories.mail;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class ResetPasswordMail implements MailFactory{
    @Override
    public Mail createMail(Map<String, Object> properties) {
        String email = (String) properties.get("email");
        String magic_link =  (String) properties.get("magic_link");

        Mail mail = new Mail();
        mail.setFrom(new Email(EmailConstant.FROM_EMAIL));
        mail.setReplyTo(new Email(EmailConstant.REPLY_EMAIL));

        Personalization personalization = new Personalization();
        personalization.addDynamicTemplateData("magic_link", magic_link);
        personalization.addTo(new Email(email));
        mail.addPersonalization(personalization);

        mail.setTemplateId(EmailConstant.RESET_PASSWORD_TEMPLATE_ID);
        return mail;
    }
}
