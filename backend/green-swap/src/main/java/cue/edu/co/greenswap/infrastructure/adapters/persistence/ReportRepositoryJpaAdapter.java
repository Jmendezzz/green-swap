package cue.edu.co.greenswap.infrastructure.adapters.persistence;

import cue.edu.co.greenswap.application.ports.persistence.ReportRepository;
import cue.edu.co.greenswap.domain.models.Report;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa.ReportRepositoryJpa;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers.ReportMapperDBO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@AllArgsConstructor
public class ReportRepositoryJpaAdapter implements ReportRepository {
  private final ReportRepositoryJpa repository;
  private final ReportMapperDBO mapper;
  @Override
  public Report save(Report report) {
    return mapper.toDomain(repository.save(mapper.toEntity(report)));
  }
}
