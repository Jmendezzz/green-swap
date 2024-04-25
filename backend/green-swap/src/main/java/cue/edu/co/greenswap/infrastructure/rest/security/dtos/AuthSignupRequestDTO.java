package cue.edu.co.greenswap.infrastructure.rest.security.dtos;

public record AuthSignupRequestDTO (
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        String password
){
}
