package cue.edu.co.greenswap.application.factories.mail;

import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import cue.edu.co.greenswap.application.constants.EmailConstant;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.Product;
import org.springframework.stereotype.Component;

import java.util.Map;

import static cue.edu.co.greenswap.application.factories.mail.DefaultConfigMail.defaultMail;

@Component
public class ExchangeAcceptedMail implements MailFactory{

    @Override
    public Mail createMail(Map<String, Object> properties) {
        Mail mail = defaultMail(properties);

        Product productOffered = (Product) properties.get("ProductOffered");
        Product productRequested = (Product) properties.get("ProductRequested");

        Personalization personalization = new Personalization();
        personalization.addDynamicTemplateData("ProductOffered", productOffered.getName());
        personalization.addDynamicTemplateData("ProductRequested", productRequested.getName());
        personalization.addDynamicTemplateData("ProductRequestedOwner", productRequested.getOwner().getFirstName());
        mail.addPersonalization(personalization);

        mail.setTemplateId(EmailConstant.EXCHANGE_ACCEPTED_TEMPLATE_ID);
        return mail;
    }
}
