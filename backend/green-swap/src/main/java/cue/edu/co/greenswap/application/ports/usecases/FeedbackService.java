package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.feedback.CreateFeedbackDTO;
import cue.edu.co.greenswap.domain.dtos.feedback.FeedbackDTO;

import java.util.Optional;

public interface FeedbackService {
    FeedbackDTO createFeedback(CreateFeedbackDTO createFeedbackDTO);
    Optional<FeedbackDTO> getFeedbackById(Long id);
}
