package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.MessageRepository;
import cue.edu.co.greenswap.domain.models.Message;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.MessageEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.MessageRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.MessageMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class MessageRepositoryJpaAdapter implements MessageRepository {
  private final MessageRepositoryJpa repository;
  private final MessageMapperDBO mapper;
  @Override
  public Message save(Message message) {
    MessageEntity messageSaved = repository.save(mapper.toEntity(message));
    return mapper.toDomain(messageSaved);
  }
}
