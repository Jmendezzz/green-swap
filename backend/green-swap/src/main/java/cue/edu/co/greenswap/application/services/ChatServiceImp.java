package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constants.ChatConstantMessage;
import cue.edu.co.greenswap.application.mappers.ChatMapperDTO;
import cue.edu.co.greenswap.application.mappers.MessageMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ChatRepository;
import cue.edu.co.greenswap.application.ports.persistence.MessageRepository;
import cue.edu.co.greenswap.application.ports.usecases.ChatService;
import cue.edu.co.greenswap.application.ports.usecases.MessageService;
import cue.edu.co.greenswap.domain.dtos.message.ChatDTO;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import cue.edu.co.greenswap.domain.models.Chat;
import cue.edu.co.greenswap.domain.models.Message;
import cue.edu.co.greenswap.infrastructure.exceptions.ChatException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class ChatServiceImp implements ChatService {
  private final ChatRepository chatRepository;
  private final MessageService messageService;
  private final MessageMapperDTO messageMapper;
  private final ChatMapperDTO chatMapper;
  @Override
  public MessageDTO sendMessage(Long chatId, SendMessageDTO message) {
    Optional<Chat> chat = chatRepository.findById(chatId);
    if(chat.isEmpty()){
      throw new ChatException(ChatConstantMessage.CHAT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
    MessageDTO messageSaved = messageService.save(message);
    List<Message> messages = chat.get().getMessages();
    messages.add(messageMapper.toDomain(messageSaved));

    chatRepository.update(chat.get());
    return messageSaved;
  }

  @Override
  @Transactional
  public Optional<ChatDTO> getChatById(Long id) {
    return chatRepository.findById(id).map(chatMapper::toDTO);
  }
}
