package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.UserRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import org.springframework.stereotype.Component;

import java.util.Optional;


@Component
public class UserRepositoryJpaAdapter implements UserRepository {
  private UserRepositoryJpa repository;
  private UserMapperDBO mapper;
  @Override
  public User save(User user) {
    UserEntity userSaved = repository.save(mapper.toDBO(user));

    return mapper.toDomain(userSaved);
  }
  @Override
  public Optional<User> findByEmail(String email) {
    return repository.findByEmail(email).map(mapper::toDomain);
  }
}
