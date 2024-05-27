package cue.edu.co.greenswap.application.mappers;

import cue.edu.co.greenswap.domain.dtos.report.CreateReportDTO;
import cue.edu.co.greenswap.domain.dtos.report.ReportDTO;
import cue.edu.co.greenswap.domain.models.Report;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReportMapperDTO {
    ReportDTO toDTO(Report report);
    Report toDomain(ReportDTO reportDTO);
    Report toDomain(CreateReportDTO createReportDTO);
}
