package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Notification;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.NotificationEntity;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface NotificationMapperDBO {
    NotificationEntity toDBO(Notification notification);
    Notification toDomain(NotificationEntity notificationEntity);
    List<Notification> toDomain(List<NotificationEntity> notificationEntities);
}
