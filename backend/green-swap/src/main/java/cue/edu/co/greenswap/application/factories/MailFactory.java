package cue.edu.co.greenswap.application.factories;

import com.sendgrid.helpers.mail.Mail;

import java.util.Map;

public interface MailFactory {
    Mail createMail(Map<String, Object> properties);
}
