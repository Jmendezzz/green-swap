package cue.edu.co.greenswap.infrastructure.rest.security.auditing;

import org.springframework.data.domain.AuditorAware;

import java.util.Optional;

//Todo after login
public class ApplicationAuditionAware implements AuditorAware<Long> {
  @Override
  public Optional<Long> getCurrentAuditor() {
    return Optional.empty();
  }
}
