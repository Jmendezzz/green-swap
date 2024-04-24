package cue.edu.co.greenswap.application.constraints;

import cue.edu.co.greenswap.application.ports.usecases.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class UserConstraint {

  private UserService userService;

  public void validateRepeatedEmail(String email){

    // if( userService.getByEmail(email).isPresent() ) throw new UserException()
  }

}
