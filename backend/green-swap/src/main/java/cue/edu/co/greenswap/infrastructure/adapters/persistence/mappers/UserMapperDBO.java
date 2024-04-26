package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapperDBO {
  UserEntity toDBO(User user);
  User toDomain(UserEntity userEntity);
}
