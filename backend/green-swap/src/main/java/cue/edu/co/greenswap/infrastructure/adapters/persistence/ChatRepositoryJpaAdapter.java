package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ChatRepository;
import cue.edu.co.greenswap.domain.models.Chat;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.ChatRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.ChatMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@AllArgsConstructor
public class ChatRepositoryJpaAdapter implements ChatRepository {
  private final ChatRepositoryJpa repository;
  private final ChatMapperDBO chatMapperDBO;
  @Override
  public Optional<Chat> findById(Long id) {
    return repository.findById(id).map(chatMapperDBO::toDomain);
  }
  @Override
  public Chat update(Chat chat) {
    return chatMapperDBO.toDomain(repository.save(chatMapperDBO.toEntity(chat)));
  }
}
