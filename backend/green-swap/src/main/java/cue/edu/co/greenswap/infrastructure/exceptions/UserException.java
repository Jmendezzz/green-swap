package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class UserException extends CustomHttpException{
  public UserException(String message, HttpStatus httpStatus ){
    super(message, httpStatus );
  }
}
