package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ChatEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChatRepositoryJpa extends JpaRepository<ChatEntity, Long> {
}
