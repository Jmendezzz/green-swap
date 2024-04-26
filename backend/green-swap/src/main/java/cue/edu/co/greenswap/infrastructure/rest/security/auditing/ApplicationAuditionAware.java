package cue.edu.co.greenswap.infrastructure.rest.security.auditing;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import java.util.Optional;

@AllArgsConstructor
public class ApplicationAuditionAware implements AuditorAware<UserEntity> {
  private final UserRepository userRepository;
  private final UserMapperDBO userMapperDBO;

  @Override
  public Optional<UserEntity> getCurrentAuditor() {
    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
    if (authentication == null || !authentication.isAuthenticated()) {
      return Optional.empty();
    }
    Optional<User> user = userRepository.findByEmail(authentication.getName());

    return user.map(userMapperDBO::toDBO);
  }
}
