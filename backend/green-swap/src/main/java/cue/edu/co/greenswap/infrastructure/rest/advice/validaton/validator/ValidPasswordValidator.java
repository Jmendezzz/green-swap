package cue.edu.co.greenswap.infrastructure.rest.advice.validaton.validator;

import cue.edu.co.greenswap.infrastructure.rest.advice.validaton.anotation.ValidPassword;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class ValidPasswordValidator implements ConstraintValidator<ValidPassword, String> {

      @Override
      public boolean isValid(String password, ConstraintValidatorContext constraintValidatorContext) {
          return password != null && password.matches("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$");
      }
}
