package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.constants.FeedbackConstantMessage;
import cue.edu.co.greenswap.application.ports.persistence.FeedbackRepository;
import cue.edu.co.greenswap.domain.dtos.feedback.FeedbackDTO;
import cue.edu.co.greenswap.domain.dtos.transaction.TransactionDTO;
import cue.edu.co.greenswap.domain.enums.TransactionStatus;
import cue.edu.co.greenswap.infrastructure.exceptions.FeedbackException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class FeedbackConstraint {
    private final FeedbackRepository repository;

    public void validateTransactionStatus(FeedbackDTO feedbackDTO){
        TransactionDTO transaction = feedbackDTO.transaction();
        if(!transaction.status().equals(TransactionStatus.DELIVERED)){
            throw new FeedbackException(FeedbackConstantMessage.TRANSACTION_STATUS_NOT_VALID, HttpStatus.BAD_REQUEST);
        }
    }
}
