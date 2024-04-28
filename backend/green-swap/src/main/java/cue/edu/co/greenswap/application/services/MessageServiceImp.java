package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.mappers.MessageMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.MessageRepository;
import cue.edu.co.greenswap.application.ports.usecases.MessageService;
import cue.edu.co.greenswap.domain.dtos.message.MessageDTO;
import cue.edu.co.greenswap.domain.dtos.message.SendMessageDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class MessageServiceImp implements MessageService {
  private final MessageRepository repository;
  private final MessageMapperDTO mapper;

  @Override
  public MessageDTO save(SendMessageDTO messageDTO) {
    return mapper.toDTO(repository.save(mapper.toDomain(messageDTO)));
  }
}
