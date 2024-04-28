package cue.edu.co.greenswap.infrastructure.websocket.controllers;

import cue.edu.co.greenswap.application.ports.usecases.ChatService;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@AllArgsConstructor
public class MessageController {
  private final ChatService chatService;
  @MessageMapping("/message/{chatId}")
  @SendTo("/topic/messages")
  public MessageDTO sendMessage(SendMessageDTO message, @PathVariable Long chatId) {
    return chatService.sendMessage(chatId,message);
  }
}
