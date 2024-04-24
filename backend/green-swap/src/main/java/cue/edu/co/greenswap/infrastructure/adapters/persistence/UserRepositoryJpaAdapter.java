package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.UserRepositoryJpa;
import org.springframework.stereotype.Component;


@Component
public class UserRepositoryJpaAdapter implements UserRepository {
  private UserRepositoryJpa userRepository;
  @Override
  public User create(User user) {
    UserEntity userSaved = null; //TODO  userRepository.save(userMapper.toEntity(user));
    userRepository.save(null); //TODO userMapper.toDomain(userEntity)
    return null;
  }
}
