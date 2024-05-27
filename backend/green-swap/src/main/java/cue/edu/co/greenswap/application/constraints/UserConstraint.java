package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@AllArgsConstructor
public class UserConstraint {

  private UserRepository repository;
  private PasswordEncoder passwordEncoder;

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

  public void validateCurrentPassword(String email, String currentPassword) {
    Optional<User> user = repository.findByEmail(email);
    System.out.println(passwordEncoder.matches(currentPassword, user.get().getPassword()));
    System.out.println(user.get().getPassword());
    if (!passwordEncoder.matches(currentPassword, user.get().getPassword())) {
      throw new UserException(UserConstantMessage.INVALID_CURRENT_PASSWORD, HttpStatus.BAD_REQUEST);
    }
  }
  public User validateUser(Long id){
    Optional<User> user = repository.findById(id);
    if (user.isEmpty()) throw new UserException(UserConstantMessage.INVALID_EMAIL, HttpStatus.NOT_FOUND);
    return user.get();
  }
}
