package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@AllArgsConstructor
public class UserConstraint {

  private UserRepository repository;

  public void validateRepeatedEmail(String email) {
    if (repository.findByEmail(email).isPresent()) {
      throw new UserException(String.format(UserConstantMessage.EMAIL_ALREADY_IN_USE, email), HttpStatus.BAD_REQUEST);
    }
  }

  public void validateUserIsConfirmed(User user) {
    if (user.isVerified()) {
      throw new UserException(
              UserConstantMessage.USER_ALREADY_CONFIRMED,
              HttpStatus.BAD_REQUEST);
    }
  }

  public void validateUserEmail(String email) {
    Optional<User> user = repository.findByEmail(email);
    if (user.isEmpty()) throw new UserException(UserConstantMessage.INVALID_EMAIL, HttpStatus.NOT_FOUND);
  }

  public void validateConfirmPassword(String password, String confirmPassword) {
    if (!password.equals(confirmPassword)) throw new UserException(UserConstantMessage.INVALID_CONFIRM_PASSWORD, HttpStatus.BAD_REQUEST);
  }
  public void validateNewPassword(String email, String password){
    Optional<User> user = repository.findByEmail(email);
    if (user.get().getPassword().equals(password)) throw new UserException(UserConstantMessage.INVALID_NEW_PASSWORD, HttpStatus.BAD_REQUEST);
  }
}
