package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.constraints.UserConstraint;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.ResetUserPasswordDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
  private UserRepository repository;
  private UserConstraint constraint;
  private UserMapperDTO mapper;


  /**
   * Validates if the provided email is already in use by another user.
   *
   * @param user the data for the user to be created
   * @throws UserException if the provided email is already in use with an appropriate error message and HTTP status
   */
  @Override
  public UserDTO create(CreateUserDTO user) {
    constraint.validateRepeatedEmail(user.email());

    User userSaved =  repository.save(mapper.toDomain(user));

    return mapper.toDTO(userSaved);
  }

  /**
   * Retrieves the user with the specified email.
   *
   * @param email the email of the user to retrieve
   * @return an Optional containing the DTO representation of the user if found, or empty if not found
   */
  @Override
  public Optional<UserDTO> getByEmail(String email) {
    return repository.findByEmail(email).map(mapper::toDTO);
  }

  /**
   * Verifies the user, updating the verified status to true.
   *
   * @param user the user DTO whose verified status is to be updated
   * @return the DTO representation of the user with the updated verified status
   */
  @Override
  public UserDTO setVerified(UserDTO user) {
    return mapper.toDTO(repository.setVerified(mapper.toDomain(user)));
  }

  /**
   * Updates the user information.
   *
   * @param user the user DTO containing the updated information
   * @return the DTO representation of the updated user
   */
  @Override
  public UserDTO update(UserDTO user) {
    return mapper.toDTO(repository.save(mapper.toDomain(user)));
  }

  @Override
  public void resetPassword(String email, String password, String confirmPassword) {
    constraint.validateUserEmail(email);
    constraint.validateConfirmPassword(password, confirmPassword);
    constraint.validateNewPassword(email, password);
    User user = repository.findByEmail(email).get();
    user.setPassword(password);
    repository.save(user);
  }
}
