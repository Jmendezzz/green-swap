package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.models.User;

public interface SecurityContextService {

  User getCurrentUser();
}
