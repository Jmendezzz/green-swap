package cue.edu.co.greenswap.infrastructure.exceptions;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
@Setter
public class CustomHttpException extends RuntimeException{
  private final String message;
  private final HttpStatus httpStatus;

}
