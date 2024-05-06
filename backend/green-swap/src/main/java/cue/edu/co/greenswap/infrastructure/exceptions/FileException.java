package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class FileException extends CustomHttpException{
  public FileException(String message, HttpStatus httpStatus) {
    super(message, httpStatus);
  }
}
