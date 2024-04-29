package cue.edu.co.greenswap.infrastructure.rest.advice.validaton.anotation;

import cue.edu.co.greenswap.infrastructure.rest.advice.validaton.validator.ValidPasswordValidator;
import jakarta.validation.Constraint;
import jakarta.validation.Payload;

import java.lang.annotation.*;

@Documented
@Constraint(validatedBy = ValidPasswordValidator.class)
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.METHOD, ElementType.FIELD})
public @interface ValidPassword {
    String message() default "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un número y un carácter especial";

    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
