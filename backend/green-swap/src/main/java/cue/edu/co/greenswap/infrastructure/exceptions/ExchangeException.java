package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class ExchangeException extends CustomHttpException{
  public ExchangeException(String message, HttpStatus httpStatus) {
    super(message, httpStatus);
  }
}
