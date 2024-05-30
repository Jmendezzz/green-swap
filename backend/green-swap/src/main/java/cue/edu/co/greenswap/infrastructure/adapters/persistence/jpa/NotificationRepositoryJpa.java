package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.NotificationEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NotificationRepositoryJpa extends JpaRepository<NotificationEntity, Long> {
    List<NotificationEntity> findByUser(UserEntity user);
    void deleteById(Long id);
    void deleteAllByUser(UserEntity user);
}
