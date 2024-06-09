package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.SecurityContextService;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
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
  private final UserMapperDTO mapper;
  @Override
  public UserDTO getCurrentUser() {
    Optional<User> userOptional =  userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName());
    if(userOptional.isPresent()){
      return mapper.toDTO(userOptional.get());
    }else{
      throw new UsernameNotFoundException("User not found");
    }
  }
}

