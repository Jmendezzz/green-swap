package cue.edu.co.greenswap.infrastructure.rest.config;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import cue.edu.co.greenswap.infrastructure.rest.security.auditing.ApplicationAuditionAware;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

@Configuration
public class ApplicationConfig {

  @Bean
  public AuditorAware<UserEntity> auditorAware(UserRepository repository, UserMapperDBO mapper) {
    return new ApplicationAuditionAware(repository, mapper);
  }

}
