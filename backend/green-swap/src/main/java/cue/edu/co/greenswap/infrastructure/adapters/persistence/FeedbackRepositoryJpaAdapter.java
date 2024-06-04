package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.FeedbackRepository;
import cue.edu.co.greenswap.domain.models.Feedback;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.FeedbackEntity;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.FeedbackRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.FeedbackMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
@AllArgsConstructor
public class FeedbackRepositoryJpaAdapter implements FeedbackRepository {
    private final FeedbackRepositoryJpa repository;
    private final FeedbackMapperDBO mapper;

    @Override
    public Feedback save(Feedback feedback) {
        FeedbackEntity feedbackSaved = repository.save(mapper.toDBO(feedback));
        return mapper.toDomain(feedbackSaved);
    }

    @Override
    public Optional<Feedback> findById(Long id) {
        return repository.findById(id).map(mapper::toDomain);
    }
}
