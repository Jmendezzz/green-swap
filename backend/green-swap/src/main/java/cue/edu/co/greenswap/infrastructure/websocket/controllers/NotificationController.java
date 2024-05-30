package cue.edu.co.greenswap.infrastructure.websocket.controllers;

import lombok.AllArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
@AllArgsConstructor
public class NotificationController {
    private final SimpMessagingTemplate simpMessageTemplate;



}
