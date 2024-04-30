package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.ConfirmationToken;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ConfirmationTokenEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")

public interface ConfirmationTokenMapperDBO {
    ConfirmationTokenEntity toDBO(ConfirmationToken confirmationToken);
    ConfirmationToken toDomain(ConfirmationTokenEntity confirmationTokenEntity);
    List<ConfirmationToken> toDomain(List<ConfirmationTokenEntity> confirmationTokenEntities);
}
