package cue.edu.co.greenswap.infrastructure.websocket.controllers;

import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller("webSocketNotificationController")
@AllArgsConstructor
public class NotificationController {
    private final SimpMessagingTemplate simpMessageTemplate;

    @MessageMapping("/notifications")
    public void sendNotification(NotificationDTO notification) {
        simpMessageTemplate.convertAndSendToUser(notification.user().email(), "/notifications", notification);
    }

}
