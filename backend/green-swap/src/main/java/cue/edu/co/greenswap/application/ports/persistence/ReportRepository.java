package cue.edu.co.greenswap.application.ports.persistence;

import cue.edu.co.greenswap.domain.models.Report;
import org.mapstruct.Mapper;
@Mapper(componentModel = "spring")
public interface ReportRepository {
  Report save(Report report);
}
