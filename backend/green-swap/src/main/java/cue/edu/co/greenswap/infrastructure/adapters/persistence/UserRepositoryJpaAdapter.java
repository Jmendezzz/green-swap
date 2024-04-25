package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.UserRepository;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.UserRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
@AllArgsConstructor
public class UserRepositoryJpaAdapter implements UserRepository {
  private UserRepositoryJpa repository;
  private UserMapperDBO mapper;
  private PasswordEncoder passwordEncoder;
  @Override
  public User save(User user) {
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    UserEntity userSaved = repository.save(mapper.toDBO(user));

    return mapper.toDomain(userSaved);
  }
  @Override
  public Optional<User> findByEmail(String email) {
    return repository.findByEmail(email).map(mapper::toDomain);
  }
}
