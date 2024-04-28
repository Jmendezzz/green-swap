package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Chat;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ChatEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ChatMapperDBO {
  Chat toDomain(ChatEntity messageEntity);
  ChatEntity toEntity(Chat message);
}
