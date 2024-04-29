package cue.edu.co.greenswap.infrastructure.smtp.config;

import com.sendgrid.SendGrid;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SendGridConfig {

    @Value("${sendgrid.api.key}")
    private String key;

    @Bean
    public SendGrid sendGrid() {
        return new SendGrid(key);
    }
}
