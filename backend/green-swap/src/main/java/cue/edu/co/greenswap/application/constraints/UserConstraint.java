package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserConstraint {

  private UserRepository repository;

  public void validateRepeatedEmail(String email) {
    if (repository.findByEmail(email).isPresent()) {
      throw new UserException(String.format(UserConstantMessage.EMAIL_ALREADY_IN_USE, email), HttpStatus.BAD_REQUEST);
    }
  }
}
