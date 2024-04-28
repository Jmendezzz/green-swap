package cue.edu.co.greenswap.domain.dtos.message;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.time.LocalDateTime;

public record MessageDTO(
        Long id,
        String content,
        UserDTO sender,
        LocalDateTime createdAt
) {
}
