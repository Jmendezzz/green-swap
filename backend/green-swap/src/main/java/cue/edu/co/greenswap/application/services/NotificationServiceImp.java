package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.mappers.NotificationMapperDTO;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.NotificationRepository;
import cue.edu.co.greenswap.application.ports.usecases.NotificationService;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.Notification;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.NotificationEntity;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NotificationServiceImp implements NotificationService {
    private final NotificationRepository repository;
    private final NotificationMapperDTO notificationMapperDTO;
    private final UserMapperDTO userMapperDTO;

    @Override
    public void save(NotificationDTO notificationDTO) {
        repository.save(notificationMapperDTO.toDomain(notificationDTO));
    }

    @Override
    public List<NotificationDTO> findByUser(UserDTO userDTO) {
        return notificationMapperDTO.toDTO(repository.findByUser(userMapperDTO.toDomain(userDTO)));
    }

    @Override
    public void delete(Long id) {
        repository.delete(id);
    }

    @Override
    public void deleteAllByUser(UserDTO userDTO) {
        repository.deleteAllByUser(userMapperDTO.toDomain(userDTO));
    }

    @Override
    public void markAsReadByIdList(List<NotificationDTO> notifications) {
        for (NotificationDTO notificationDTO : notifications) {
            Notification notification = notificationMapperDTO.toDomain(notificationDTO);
            notification.setRead(true);
            repository.save(notification);
        }
    }
}
