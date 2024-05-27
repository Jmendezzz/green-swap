package cue.edu.co.greenswap.domain.dtos.report;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

public record CreateReportDTO(
        String reason,
        String description,
        UserDTO reported) {
}
