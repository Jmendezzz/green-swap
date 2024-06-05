package cue.edu.co.greenswap.domain.dtos.message;


public record SendMessageDTO(
        String content,
        Long senderId
) {
}
