package cue.edu.co.greenswap.infrastructure.rest.security.dtos;

import cue.edu.co.greenswap.application.constants.UserConstantMessage;
import cue.edu.co.greenswap.infrastructure.rest.advice.validaton.anotation.ValidPassword;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record AuthSignupRequestDTO (

        @NotBlank(message = UserConstantMessage.NAME_NOT_BLANK)
        String firstName,

        @NotBlank(message = UserConstantMessage.NAME_NOT_BLANK)
        String lastName,

        @Email(message = UserConstantMessage.INVALID_EMAIL)
        String email,
        @NotBlank(message = UserConstantMessage.PHONE_NUMBER_NOT_BLANK)
        String phoneNumber,

        @NotBlank(message = UserConstantMessage.PASSWORD_NOT_BLANK)
        @ValidPassword
        String password,
        String urlProfilePicture
){
        public AuthSignupRequestDTO withProfilePicture(String profilePicture){
                return new AuthSignupRequestDTO(firstName, lastName, email, phoneNumber, password, profilePicture);
        }
}
