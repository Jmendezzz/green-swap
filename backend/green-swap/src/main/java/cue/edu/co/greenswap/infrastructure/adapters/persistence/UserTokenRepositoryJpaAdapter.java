package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.UserTokenRepository;
import cue.edu.co.greenswap.domain.enums.TokenType;
import cue.edu.co.greenswap.domain.models.UserToken;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserTokenEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.UserTokenRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserTokenMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class UserTokenRepositoryJpaAdapter implements UserTokenRepository {
    private UserTokenRepositoryJpa repository;
    private UserMapperDBO userMapper;
    private UserTokenMapperDBO mapper;
    @Override
    public UserToken save(UserToken userToken) {
        UserTokenEntity userTokenEntity = mapper.toDBO(userToken);
        return mapper.toDomain(repository.save(userTokenEntity));
    }

    @Override
    public Optional<UserToken> findByToken(String token) {
        return repository.findByToken(token).map(mapper::toDomain);
    }

    @Override
    public List<UserToken> findByUser(User user) {
        return repository.findByUser(userMapper.toDBO(user))
                .stream()
                .map(mapper::toDomain)
                .toList();
    }

    @Override
    public List<UserToken> findByType(TokenType type) {
        return repository.findByType(type)
                .stream()
                .map(mapper::toDomain)
                .toList();
    }

    @Override
    public Optional<UserToken> findLastUserToken(User user) {
        return repository.findByUser(userMapper.toDBO(user))
                .stream()
                .sorted((a, b) -> b.getCreatedAt().compareTo(a.getCreatedAt()))
                .map(mapper::toDomain)
                .findFirst();
    }

    @Override
    public UserToken update(UserToken userToken) {
        UserTokenEntity userTokenEntity = mapper.toDBO(userToken);
        return mapper.toDomain(repository.save(userTokenEntity));
    }
}
