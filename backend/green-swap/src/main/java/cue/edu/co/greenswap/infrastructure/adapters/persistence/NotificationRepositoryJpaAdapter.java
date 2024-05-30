package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.NotificationRepository;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.models.Notification;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.NotificationRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.NotificationMapperDBO;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.UserMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@AllArgsConstructor
public class NotificationRepositoryJpaAdapter implements NotificationRepository {
    private final NotificationRepositoryJpa repository;
    private final NotificationMapperDBO notificationMapperDBO;
    private final UserMapperDBO userMapperDBO;

    @Override
    public Notification save(Notification notification) {
        return notificationMapperDBO.toDomain(repository.save(notificationMapperDBO.toDBO(notification)));
    }

    @Override
    public List<Notification> findAll() {
        return notificationMapperDBO.toDomain(repository.findAll());
    }

    @Override
    public List<Notification> findByUser(User user) {
        return notificationMapperDBO.toDomain(repository.findByUser(userMapperDBO.toDBO(user)));
    }

    @Override
    public void deleteAllByUser(User user) {
        repository.deleteAllByUser(userMapperDBO.toDBO(user));
    }

    @Override
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
