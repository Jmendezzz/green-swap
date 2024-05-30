package cue.edu.co.greenswap.domain.dtos.notification;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

public record CreateNotificationDTO(
        UserDTO user,
        String message,
        boolean isRead,
        String url
) {
}
