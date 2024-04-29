package cue.edu.co.greenswap.infrastructure.rest.advice;

public record CustomHttpExceptionResponse(
        String message,
        int status
) {
}
