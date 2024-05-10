package cue.edu.co.greenswap.infrastructure.rest.security.dtos;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"username", "urlProfilePicture", "message"})
public record AuthResponseDTO(
        String fullName, String urlProfilePicture, String message
) {
}
