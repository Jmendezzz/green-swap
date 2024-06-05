package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.feedback.CreateFeedbackDTO;
import cue.edu.co.greenswap.domain.dtos.feedback.FeedbackDTO;
import cue.edu.co.greenswap.domain.models.Feedback;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FeedbackMapperDTO {
    Feedback toDomain(FeedbackDTO feedbackDTO);
    Feedback toDomain(CreateFeedbackDTO createFeedbackDTO);
    FeedbackDTO toDTO(Feedback feedback);
    FeedbackDTO toDTO(CreateFeedbackDTO createFeedbackDTO);
}
