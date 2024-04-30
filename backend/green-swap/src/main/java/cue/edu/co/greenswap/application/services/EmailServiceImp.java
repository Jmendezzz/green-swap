package cue.edu.co.greenswap.application.services;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.Response;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import cue.edu.co.greenswap.application.ports.usecases.EmailService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@AllArgsConstructor
public class EmailServiceImp implements EmailService {

    private SendGrid sendGrid;
    @Override
    public Response sendEmail(Mail mail) {
        Request request = new Request();
        Response response = null;
        try {
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());
            response = this.sendGrid.api(request);
        } catch (IOException ex) {
            ex.printStackTrace(); //TODO: HANDLE EXCEPTION
        }
        return response;
    }
}
