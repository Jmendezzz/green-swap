package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ConfirmationTokenRepository;
import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ConfirmationTokenEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.ConfirmationTokenRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.ConfirmationTokenMapperDBO;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import jakarta.persistence.EntityManager;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@AllArgsConstructor
public class ConfirmationTokenRepositoryJpaAdapter implements ConfirmationTokenRepository {
    private ConfirmationTokenRepositoryJpa repository;
    private UserMapperDBO userMapper;
    private ConfirmationTokenMapperDBO mapper;

    @Override
    public ConfirmationToken save(ConfirmationToken confirmationToken) {
        ConfirmationTokenEntity confirmationTokenEntity = mapper.toDBO(confirmationToken);
        return mapper.toDomain(repository.save(confirmationTokenEntity));
    }

    @Override
    public Optional<ConfirmationToken> findByToken(String token) {
        return repository.findByToken(token).map(mapper::toDomain);
    }

    @Override
    public List<ConfirmationToken> findByUser(User user) {
        return repository.findByUser(userMapper.toDBO(user)).stream().map(mapper::toDomain).toList();
    }

    @Override
    public ConfirmationToken update(ConfirmationToken confirmationToken) {
        ConfirmationTokenEntity confirmationTokenEntity = mapper.toDBO(confirmationToken);
        return mapper.toDomain(repository.save(confirmationTokenEntity));
    }
}
