package cue.edu.co.greenswap.application.services;

import cue.edu.co.greenswap.application.ports.usecases.CoinService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CoinServiceImp implements CoinService {
  private final UserService userService;

  @Override
  public void addCoins(UserDTO user, Integer coins) {
    UserDTO updatedUser = user.addCoins(coins);
    userService.update(updatedUser);
  }
}
