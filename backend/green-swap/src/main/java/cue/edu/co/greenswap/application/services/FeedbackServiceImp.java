package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.FeedbackConstraint;
import cue.edu.co.greenswap.application.mappers.FeedbackMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.FeedbackRepository;
import cue.edu.co.greenswap.application.ports.usecases.FeedbackService;
import cue.edu.co.greenswap.domain.dtos.feedback.CreateFeedbackDTO;
import cue.edu.co.greenswap.domain.dtos.feedback.FeedbackDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class FeedbackServiceImp implements FeedbackService {
    private final FeedbackConstraint constraint;
    private final FeedbackRepository repository;
    private final FeedbackMapperDTO mapper;

    @Override
    public FeedbackDTO createFeedback(CreateFeedbackDTO createFeedbackDTO) {
        constraint.validateTransactionStatus(mapper.toDTO(createFeedbackDTO));

        return mapper.toDTO(repository.save(mapper.toDomain(createFeedbackDTO)));
    }

    @Override
    public Optional<FeedbackDTO> getFeedbackById(Long id) {
        return repository.findById(id).map(mapper::toDTO);
    }
}
