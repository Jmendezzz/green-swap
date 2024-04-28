package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class ChatException extends CustomHttpException{
  public ChatException(String message, HttpStatus httpStatus) {
    super(message, httpStatus);
  }
}
