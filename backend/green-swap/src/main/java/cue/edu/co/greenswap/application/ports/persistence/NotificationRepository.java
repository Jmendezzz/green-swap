package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.models.Notification;
import cue.edu.co.greenswap.domain.models.User;

import java.util.List;

public interface NotificationRepository {
    Notification save(Notification notification);
    List<Notification> findAll();
    List<Notification> findByUser(User user);
    void deleteAllByUser(User user);
    void delete(Long id);
}
