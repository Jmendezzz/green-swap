package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Chat;

import java.util.Optional;

public interface ChatRepository {
  Optional<Chat> findById(Long id);
  Chat update(Chat chat);
}
