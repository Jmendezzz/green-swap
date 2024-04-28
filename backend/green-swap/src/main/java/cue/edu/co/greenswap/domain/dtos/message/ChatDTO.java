package cue.edu.co.greenswap.domain.dtos.message;

import java.time.LocalDateTime;
import java.util.List;

public record ChatDTO(
        Long id,
        List<MessageDTO> messages,
        LocalDateTime createdAt

) {
}
