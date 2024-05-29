package cue.edu.co.greenswap.domain.models;


import java.time.LocalDateTime;

public class StripeSession {
    private Long id;
    private LocalDateTime createdAt;
    private String sessionId;
    private User user;
    private String payment_intent_id;
    private String payment_status;
}
