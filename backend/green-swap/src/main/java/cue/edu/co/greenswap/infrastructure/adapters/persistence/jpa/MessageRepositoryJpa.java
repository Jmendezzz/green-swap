package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MessageRepositoryJpa extends JpaRepository< MessageEntity, Long> {
}
