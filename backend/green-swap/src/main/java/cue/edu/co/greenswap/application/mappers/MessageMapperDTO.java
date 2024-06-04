package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import cue.edu.co.greenswap.domain.models.Message;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MessageMapperDTO {
  MessageDTO toDTO(Message message);
  Message toDomain(MessageDTO messageDTO);
  @Mapping(target = "sender.id", source = "senderId")
  Message toDomain(SendMessageDTO messageDTO);

}
