package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.util.List;

public interface NotificationService {
    void save(NotificationDTO notificationDTO);
    List<NotificationDTO> findByUser(UserDTO userDTO);
    void delete(Long id);
    void deleteAllByUser(UserDTO userDTO);
    void markAsReadByIdList(List<NotificationDTO> notifications);
}
