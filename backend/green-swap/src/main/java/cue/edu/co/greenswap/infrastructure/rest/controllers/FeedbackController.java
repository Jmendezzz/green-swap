package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.ports.usecases.FeedbackService;
import cue.edu.co.greenswap.domain.dtos.feedback.CreateFeedbackDTO;
import cue.edu.co.greenswap.domain.dtos.feedback.FeedbackDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/exchanges")
@AllArgsConstructor
public class FeedbackController {
    private final FeedbackService service;

    @PostMapping
    public ResponseEntity<FeedbackDTO> create(@RequestBody CreateFeedbackDTO createFeedbackDTO) {
        return ResponseEntity.ok(service.createFeedback(createFeedbackDTO));
    }
    @GetMapping("/{id}")
    public ResponseEntity<FeedbackDTO> getById(@PathVariable Long id) {
        return service.getFeedbackById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
