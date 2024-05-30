package cue.edu.co.greenswap.infrastructure.websocket.controllers;

import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class NotificationController {
    private final SimpMessagingTemplate simpMessageTemplate;

    public void sendNotification(String user, NotificationDTO notification) {
        simpMessageTemplate.convertAndSendToUser(user, "/notifications", notification);
    }

}
