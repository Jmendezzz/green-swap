package cue.edu.co.greenswap.application.mappers;


import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapperDTO {
  User toDomain(CreateUserDTO userDTO);
  UserDTO toDTO(User user);


}
