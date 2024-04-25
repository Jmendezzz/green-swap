package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserConstraint {

  private UserService userService;

  public void validateRepeatedEmail(String email) {
    if (userService.getByEmail(email).isPresent()) {
      throw new UserException(String.format(UserConstantMessage.EMAIL_ALREADY_IN_USE, email), HttpStatus.BAD_REQUEST);
    }
  }
}
