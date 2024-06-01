package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Notification;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.NotificationEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NotificationMapperDBO {

    @Mapping(target="read", source="notification.read")
    NotificationEntity toDBO(Notification notification);
    @Mapping(target="isRead", source="notificationEntity.read")
    Notification toDomain(NotificationEntity notificationEntity);

    List<Notification> toDomain(List<NotificationEntity> notificationEntities);
}
