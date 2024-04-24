package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.User;

public interface UserRepository {
  User create(User user);
}
