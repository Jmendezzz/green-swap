package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class FeedbackException extends CustomHttpException{
    public FeedbackException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
