package cue.edu.co.greenswap.infrastructure.websocket.controllers;

import cue.edu.co.greenswap.application.constants.ChatConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.ChatService;
import cue.edu.co.greenswap.domain.dtos.message.ChatDTO;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.Message;
import cue.edu.co.greenswap.infrastructure.exceptions.ChatException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.Optional;

@Controller
@AllArgsConstructor
public class MessageController {
  private final ChatService chatService;
  private final SimpMessagingTemplate simpMessagingTemplate;

  @MessageMapping("/message/{chatId}")
  public void sendMessage(@Payload SendMessageDTO message, @DestinationVariable Long chatId) {
    ChatDTO chat = chatService.getChatById(chatId).orElseThrow(() -> new ChatException(ChatConstantMessage.CHAT_NOT_FOUND, HttpStatus.NOT_FOUND));
    MessageDTO messageDTO =  chatService.sendMessage(chatId, message);
    UserDTO receiver1 = chat.user1();
    UserDTO receiver2 = chat.user2();

    simpMessagingTemplate.convertAndSendToUser(
            receiver1.email(), "/chat",
            messageDTO
    );

    simpMessagingTemplate.convertAndSendToUser(
            receiver2.email(), "/chat",
            messageDTO
    );
  }
}
