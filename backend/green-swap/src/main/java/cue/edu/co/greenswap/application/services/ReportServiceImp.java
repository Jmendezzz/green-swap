package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.constraints.UserConstraint;
import cue.edu.co.greenswap.application.mappers.ReportMapperDTO;
import cue.edu.co.greenswap.application.mappers.UserMapperDTO;
import cue.edu.co.greenswap.application.ports.persistence.ReportRepository;
import cue.edu.co.greenswap.application.ports.usecases.ReportService;
import cue.edu.co.greenswap.domain.dtos.report.CreateReportDTO;
import cue.edu.co.greenswap.domain.dtos.report.ReportDTO;
import cue.edu.co.greenswap.domain.models.User;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ReportServiceImp implements ReportService {
  private final ReportRepository repository;
  private final ReportMapperDTO mapper;
  private final UserMapperDTO userMapper;
  private final UserConstraint userConstraint;
  @Override
  public ReportDTO createReport(CreateReportDTO reportDTO, Long reportedId) {
    User userReported = userConstraint.validateUser(reportedId);
    reportDTO = new CreateReportDTO(reportDTO.reason(), reportDTO.description(), userMapper.toDTO(userReported));

    return mapper.toDTO(repository.save(mapper.toDomain(reportDTO)));
  }
}
