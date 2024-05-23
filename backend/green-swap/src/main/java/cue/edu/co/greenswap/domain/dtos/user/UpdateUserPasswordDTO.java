package cue.edu.co.greenswap.domain.dtos.user;

import cue.edu.co.greenswap.infrastructure.rest.advice.validaton.anotation.ValidPassword;
import jakarta.validation.constraints.NotBlank;

public record UpdateUserPasswordDTO(
        String currentPassword,

        @ValidPassword
        @NotBlank
        String newPassword
) {
}
