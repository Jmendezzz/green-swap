package cue.edu.co.greenswap.infrastructure.rest.controllers;

import cue.edu.co.greenswap.application.ports.usecases.ReportService;
import cue.edu.co.greenswap.domain.dtos.report.CreateReportDTO;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("reports")
@AllArgsConstructor
public class ReportController {
  private final ReportService reportService;

  @PostMapping("/report/{reportedId}")
  public ResponseEntity<String> createReport(@RequestBody CreateReportDTO reportDTO,  @PathVariable String reportedId) {
    reportService.createReport(reportDTO, Long.parseLong(reportedId));
    return ResponseEntity.ok("Report created");
  }

}
