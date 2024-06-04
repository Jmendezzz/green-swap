package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.application.mappers.MessageMapperDTO;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.MessageRepository;
import cue.edu.co.greenswap.application.ports.usecases.MessageService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.Message;
import cue.edu.co.greenswap.domain.models.User;
import cue.edu.co.greenswap.infrastructure.exceptions.UserException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MessageServiceImp implements MessageService {
  private final MessageRepository repository;
  private final MessageMapperDTO mapper;
  private final UserService userService;
  private final UserMapperDTO userMapper;

  @Override
  public MessageDTO save(SendMessageDTO messageDTO) {
    Message message = mapper.toDomain(messageDTO);
    UserDTO sender = userService.getById(messageDTO.senderId()).orElseThrow(() -> new UserException(UserConstantMessage.USER_NOT_FOUND ,HttpStatus.NOT_FOUND));
    message.setSender(userMapper.toDomain(sender));
    return mapper.toDTO(repository.save(message));
  }
}
