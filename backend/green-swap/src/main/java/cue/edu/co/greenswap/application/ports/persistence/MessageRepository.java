package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Message;

public interface MessageRepository {
  Message save(Message message);
}
