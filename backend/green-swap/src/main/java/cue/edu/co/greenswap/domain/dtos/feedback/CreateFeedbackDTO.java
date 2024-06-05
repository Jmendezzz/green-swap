package cue.edu.co.greenswap.domain.dtos.feedback;

import cue.edu.co.greenswap.domain.dtos.transaction.TransactionDTO;

public record CreateFeedbackDTO(
        int rating,
        String comment,
        TransactionDTO transaction
) {
}
