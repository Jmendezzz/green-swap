package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.message.ChatDTO;
import cue.edu.co.greenswap.domain.models.Chat;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChatMapperDTO {
  ChatDTO toDTO(Chat chat);
  Chat toDomain(ChatDTO chatDTO);
}
