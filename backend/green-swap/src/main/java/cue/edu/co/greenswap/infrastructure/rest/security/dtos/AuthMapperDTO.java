package cue.edu.co.greenswap.infrastructure.rest.security.dtos;

import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface AuthMapperDTO {

  CreateUserDTO toCreateUserDTO(AuthSignupRequestDTO authSignupRequestDTO);

}
