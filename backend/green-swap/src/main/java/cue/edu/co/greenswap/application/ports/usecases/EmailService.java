package cue.edu.co.greenswap.application.ports.usecases;

import com.sendgrid.Response;
import com.sendgrid.helpers.mail.Mail;

public interface EmailService {
    Response sendEmail(Mail mail);
}
