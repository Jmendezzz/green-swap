package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.UserConstraint;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
  private UserRepository repository;
  private UserConstraint constraint;
  @Override
  public UserDTO create(CreateUserDTO user) {
    constraint.validateRepeatedEmail(user.email()); //Throw
    return null;
  }
}
