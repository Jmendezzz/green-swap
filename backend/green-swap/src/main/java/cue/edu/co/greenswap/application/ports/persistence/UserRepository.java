package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.User;

import java.util.Optional;

public interface UserRepository {
  User save(User user);
  Optional<User> findByEmail(String email);
}
