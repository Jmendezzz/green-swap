package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class ConfirmationTokenException extends CustomHttpException{
  public ConfirmationTokenException(String message, HttpStatus httpStatus) {
    super(message, httpStatus);
  }
}
