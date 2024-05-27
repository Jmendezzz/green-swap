package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.report.CreateReportDTO;
import cue.edu.co.greenswap.domain.dtos.report.ReportDTO;

public interface ReportService {
  ReportDTO createReport(CreateReportDTO reportDTO, Long reportedId);
}
