package cue.edu.co.greenswap.infrastructure.adapters.persistence.jpa;

import cue.edu.co.greenswap.infrastructure.adapters.persistence.entities.ReportEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepositoryJpa extends JpaRepository<ReportEntity, Long> {
}
