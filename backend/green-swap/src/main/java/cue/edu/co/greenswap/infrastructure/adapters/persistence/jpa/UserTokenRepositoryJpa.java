package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserTokenEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserTokenRepositoryJpa extends JpaRepository<UserTokenEntity, Long> {
    Optional<UserTokenEntity> findByToken(String token);
    List<UserTokenEntity> findByUser(UserEntity user);
    List<UserTokenEntity> findByType(TokenType type);
}
