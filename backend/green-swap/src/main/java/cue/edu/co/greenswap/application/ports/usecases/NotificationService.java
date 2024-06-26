package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.notification.CreateNotificationDTO;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.util.List;

public interface NotificationService {
    NotificationDTO save( CreateNotificationDTO notificationDTO);
    List<NotificationDTO> findByUser(UserDTO userDTO);
    void delete(Long id);
    void deleteAllByUser(UserDTO userDTO);
    void markAsReadByList(List<NotificationDTO> notifications);
}
