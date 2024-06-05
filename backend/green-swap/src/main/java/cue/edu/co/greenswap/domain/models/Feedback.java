package cue.edu.co.greenswap.domain.models;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.TransactionEntity;

import java.time.LocalDateTime;

public class Feedback {
    private Long id;
    private int rating;
    private String comment;
    private TransactionEntity transaction;
    private LocalDateTime createdAt;
}
