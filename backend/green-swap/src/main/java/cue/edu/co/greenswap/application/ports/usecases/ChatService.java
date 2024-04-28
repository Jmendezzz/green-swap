package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.message.ChatDTO;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;

import java.util.Optional;


public interface ChatService {
   MessageDTO sendMessage(Long chatId, SendMessageDTO message);
   Optional<ChatDTO> getChatById(Long id);
}
