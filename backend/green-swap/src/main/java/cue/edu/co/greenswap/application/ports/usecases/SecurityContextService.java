package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

public interface SecurityContextService {

  UserDTO getCurrentUser();
}
