package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.UserConstraint;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
  private UserRepository repository;
  private UserConstraint constraint;
  private UserMapperDTO mapper;

  @Override
  public UserDTO create(CreateUserDTO user) {
    constraint.validateRepeatedEmail(user.email());

    User userSaved =  repository.save(mapper.toDomain(user));

    return mapper.toDTO(userSaved);
  }

  @Override
  public Optional<UserDTO> getByEmail(String email) {
    return repository.findByEmail(email).map(mapper::toDTO);
  }
  @Override
  public UserDTO setVerified(UserDTO user) {
    return mapper.toDTO(repository.setVerified(mapper.toDomain(user)));
  }

  @Override
  public UserDTO update(UserDTO user) {
    return mapper.toDTO(repository.save(mapper.toDomain(user)));
  }
}
