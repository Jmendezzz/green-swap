package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Feedback;

import java.util.Optional;

public interface FeedbackRepository {
    Feedback save(Feedback feedback);
    Optional<Feedback> findById(Long id);

}
