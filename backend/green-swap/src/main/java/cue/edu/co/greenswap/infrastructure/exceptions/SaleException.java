package cue.edu.co.greenswap.infrastructure.exceptions;

import org.springframework.http.HttpStatus;

public class SaleException extends CustomHttpException{
    public SaleException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
