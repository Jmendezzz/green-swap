package cue.edu.co.greenswap.domain.dtos.user;

public record ResetUserPasswordDTO(
        String token,
        String password,
        String confirmPassword
) {
}
