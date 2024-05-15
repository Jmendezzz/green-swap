package cue.edu.co.greenswap.application.factories.mail;

import com.sendgrid.helpers.mail.Mail;

import java.util.Map;

public interface MailFactory {
    Mail createMail(Map<String, Object> properties);
}
