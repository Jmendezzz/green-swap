package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class ProductException extends CustomHttpException{
  public ProductException(String message, HttpStatus httpStatus) {
    super(message, httpStatus);
  }
}
