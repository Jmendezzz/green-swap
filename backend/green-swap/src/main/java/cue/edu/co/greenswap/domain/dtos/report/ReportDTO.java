package cue.edu.co.greenswap.domain.dtos.report;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

import java.time.LocalDateTime;

public record ReportDTO(
    Long id,
    String reason,
    String description,
    UserDTO reporter,
    UserDTO reported,
    LocalDateTime createdAt
) {
}
