package cue.edu.co.greenswap.domain.dtos.user;

public record CreateUserDTO (
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        String password,
        String urlProfilePicture
){
}
