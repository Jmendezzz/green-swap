package cue.edu.co.greenswap.domain.dtos.notification;

import com.fasterxml.jackson.annotation.JsonIgnore;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

public record NotificationDTO(
        Long id,
        @JsonIgnore
        UserDTO user,
        String message,
        boolean isRead,
        String url
) {
}
