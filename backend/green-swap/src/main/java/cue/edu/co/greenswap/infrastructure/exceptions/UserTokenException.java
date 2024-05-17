package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class UserTokenException extends CustomHttpException{
    public UserTokenException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
