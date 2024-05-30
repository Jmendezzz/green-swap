package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.UserEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@Getter
@Setter
public class Notification {
    private Long id;
    private UserEntity user;
    private String message;
    private boolean isRead;
    private String url;
    private LocalDateTime createdAt;
}
