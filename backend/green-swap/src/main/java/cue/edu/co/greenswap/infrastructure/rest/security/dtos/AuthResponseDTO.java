package cue.edu.co.greenswap.infrastructure.rest.security.dtos;


import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonPropertyOrder({"username", "urlProfilePicture", "message", "jwt"})
public record AuthResponseDTO(
        String username, String urlProfilePicture, String message, String jwt
) {
}
