package cue.edu.co.greenswap.infrastructure.rest.config;

import cue.edu.co.greenswap.infrastructure.rest.security.auditing.ApplicationAuditionAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

@Configuration
public class ApplicationConfig {

  @Bean
  public AuditorAware<Long> auditorAware() {
    return new ApplicationAuditionAware();
  }

}
