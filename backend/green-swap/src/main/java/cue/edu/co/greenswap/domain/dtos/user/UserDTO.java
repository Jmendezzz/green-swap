package cue.edu.co.greenswap.domain.dtos.user;

import java.time.LocalTime;

public record UserDTO(
        Long id,
        String firstName,
        String lastName,
        String email,
        String urlProfilePicture,
        String phoneNumber,
        LocalTime createdAt

) {
}
