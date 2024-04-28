package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Message;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.MessageEntity;

public interface MessageMapperDBO {
  MessageEntity toEntity(Message message);
  Message toDomain(MessageEntity messageEntity);
}
