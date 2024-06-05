package cue.edu.co.greenswap.domain.dtos.message;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.time.LocalDateTime;
import java.util.List;

public record ChatDTO(
        Long id,
        UserDTO user1,
        UserDTO user2,
        List<MessageDTO> messages,
        LocalDateTime createdAt

) {
}
