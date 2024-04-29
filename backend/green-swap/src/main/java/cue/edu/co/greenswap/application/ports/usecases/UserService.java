package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;

import java.util.Optional;

public interface UserService {
  UserDTO create(CreateUserDTO user);
  Optional<UserDTO> getByEmail(String email);
  UserDTO setVerified(UserDTO user);
}
