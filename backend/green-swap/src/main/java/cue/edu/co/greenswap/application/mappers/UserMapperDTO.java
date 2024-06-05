package cue.edu.co.greenswap.application.mappers;


import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapperDTO {
  @Mapping(target ="coins", constant = "0")
  User toDomain(CreateUserDTO userDTO);
  User toDomain(UserDTO userDTO);
  UserDTO toDTO(User user);


}
