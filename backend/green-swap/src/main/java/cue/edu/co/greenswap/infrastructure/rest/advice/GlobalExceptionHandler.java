package cue.edu.co.greenswap.infrastructure.rest.advice;

import com.auth0.jwt.exceptions.JWTVerificationException;
import cue.edu.co.greenswap.infrastructure.exceptions.CustomHttpException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getFieldErrors().forEach(error -> {
      String fieldName = error.getField();
      String errorMessage = error.getDefaultMessage();
      errors.put(fieldName, errorMessage);
    });

    return errors;
  }

  @ExceptionHandler(CustomHttpException.class)
  public ResponseEntity<CustomHttpExceptionResponse> handleCustomHttpException(CustomHttpException ex) {

    return ResponseEntity
            .status(ex.getHttpStatus())
            .body(new CustomHttpExceptionResponse(
                    ex.getMessage(), ex.getHttpStatus().value())
            );
  }

  @ExceptionHandler(BadCredentialsException.class)
  public ResponseEntity<CustomHttpExceptionResponse> handleBadCredentialsException(BadCredentialsException ex) {
    return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(new CustomHttpExceptionResponse(
                    ex.getMessage(), 401)
            );
  }

  @ExceptionHandler(UsernameNotFoundException.class)
  public ResponseEntity<CustomHttpExceptionResponse> handleUsernameNotFoundException(UsernameNotFoundException ex) {
    return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(new CustomHttpExceptionResponse(
                    ex.getMessage(), 401)
            );
  }

  @ExceptionHandler(JWTVerificationException.class)
  public ResponseEntity<CustomHttpExceptionResponse> handleJWTVerificationException(JWTVerificationException ex) {
    return ResponseEntity
            .status(HttpStatus.UNAUTHORIZED)
            .body(new CustomHttpExceptionResponse(
                    ex.getMessage(), 401)
            );
  }
}
