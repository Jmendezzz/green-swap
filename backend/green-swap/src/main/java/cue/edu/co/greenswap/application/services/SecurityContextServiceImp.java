package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.SecurityContextService;
import cue.edu.co.greenswap.domain.models.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class SecurityContextServiceImp implements SecurityContextService {
  private final UserRepository userRepository;
  @Override
  public User getCurrentUser() {
    Optional<User> userOptional =  userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
    return  userOptional.orElseThrow( () -> new UsernameNotFoundException("User is not authenticated"));
  }
}

