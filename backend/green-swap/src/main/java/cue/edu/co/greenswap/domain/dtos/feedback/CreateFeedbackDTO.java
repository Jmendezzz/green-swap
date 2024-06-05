package cue.edu.co.greenswap.domain.dtos.feedback;

import cue.edu.co.greenswap.domain.dtos.transaction.TransactionDTO;

import java.time.LocalDateTime;

public record CreateFeedbackDTO(
        Long id,
        int rating,
        String comment,
        TransactionDTO transaction,
        LocalDateTime createdAt
) {
}
