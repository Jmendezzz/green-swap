package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.notification.CreateNotificationDTO;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.models.Notification;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NotificationMapperDTO {
    Notification toDomain(NotificationDTO notificationDTO);

    @Mapping(target="isRead", source="notification.read")
    NotificationDTO toDTO(Notification notification);
    List<Notification> toDomain(List<NotificationDTO> notificationDTOs);
    List<NotificationDTO> toDTO(List<Notification> notifications);
    Notification toDomain(CreateNotificationDTO createNotificationDTO);
}
