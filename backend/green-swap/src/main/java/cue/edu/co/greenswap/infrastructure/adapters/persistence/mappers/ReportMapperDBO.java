package cue.edu.co.greenswap.infrastructure.adapters.persistence.mappers;

import cue.edu.co.greenswap.domain.models.Report;
import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ReportEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReportMapperDBO {
  Report toDomain(ReportEntity reportEntity);
  ReportEntity toEntity(Report report);
}
