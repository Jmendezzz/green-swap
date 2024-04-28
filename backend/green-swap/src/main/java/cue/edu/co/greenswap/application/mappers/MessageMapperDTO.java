package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import cue.edu.co.greenswap.domain.models.Message;

public interface MessageMapperDTO {
  MessageDTO toDTO(Message message);
  Message toDomain(MessageDTO messageDTO);
  Message toDomain(SendMessageDTO messageDTO);

}
