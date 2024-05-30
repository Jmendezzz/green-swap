package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.ports.usecases.NotificationService;
import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/notifications")
@AllArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        notificationService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/delete-all")
    public ResponseEntity<Void> deleteAll(@RequestBody UserDTO userDTO) {
        notificationService.deleteAllByUser(userDTO);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/mark-as-read")
    public ResponseEntity<Void> markAsRead(@RequestBody List<NotificationDTO> notificationsDTO) {
        notificationService.markAsReadByIdList(notificationsDTO);
        return ResponseEntity.noContent().build();
    }
}