package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Report;
public interface ReportRepository {
  Report save(Report report);
}
