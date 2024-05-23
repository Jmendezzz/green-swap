package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UpdateUserProfileDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.util.Optional;

public interface UserService {
  UserDTO create(CreateUserDTO user);
  Optional<UserDTO> getByEmail(String email);
  UserDTO setVerified(UserDTO user);
  UserDTO update(UserDTO user);
  UserDTO updateProfile(UpdateUserProfileDTO user);
  void resetPassword(String email, String password, String confirmPassword);
}
