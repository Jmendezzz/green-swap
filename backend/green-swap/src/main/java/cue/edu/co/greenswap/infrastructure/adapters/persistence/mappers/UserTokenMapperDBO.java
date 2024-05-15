package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.UserToken;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserTokenEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserTokenMapperDBO {
    UserToken toDomain(UserTokenEntity userTokenEntity);
    UserTokenEntity toDBO(UserToken userToken);
    List<UserToken> toDomain(List<UserTokenEntity> userTokenEntities);
}
