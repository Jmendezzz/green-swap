package cue.edu.co.greenswap.application.factories.mail;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.util.Map;

public class DefaultConfigMail {
    public static Mail defaultMail(Map<String, Object> properties){
        UserDTO user = (UserDTO) properties.get("to");
        String magic_link = (String) properties.get("magic_link");

        Mail mail = new Mail();
        mail.setFrom(new Email(EmailConstant.FROM_EMAIL));
        mail.setReplyTo(new Email(EmailConstant.REPLY_EMAIL));

        Personalization personalization = new Personalization();
        personalization.addTo(new Email(user.email()));
        personalization.addDynamicTemplateData("username", user.firstName());
        personalization.addDynamicTemplateData("magic_link", magic_link);
        mail.addPersonalization(personalization);

        return mail;
    }
}
