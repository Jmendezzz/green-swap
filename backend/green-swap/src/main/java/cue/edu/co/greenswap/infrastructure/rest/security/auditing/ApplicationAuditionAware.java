package cue.edu.co.greenswap.infrastructure.rest.security.auditing;

import cue.edu.co.greenswap.domain.models.User;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

public class ApplicationAuditionAware implements AuditorAware<Long> {
  @Override
  public Optional<Long> getCurrentAuditor() {

    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

    if(authentication == null || !authentication.isAuthenticated()) {
      return Optional.empty();
    }
    User user = (User) authentication.getPrincipal();
    return Optional.of(user.getId());
  }
}
