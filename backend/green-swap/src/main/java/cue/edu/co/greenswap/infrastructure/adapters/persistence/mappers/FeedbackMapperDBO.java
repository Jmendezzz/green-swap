package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Feedback;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.FeedbackEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FeedbackMapperDBO {
    FeedbackEntity toDBO(Feedback feedback);
    Feedback toDomain(FeedbackEntity feedbackEntity);
}
