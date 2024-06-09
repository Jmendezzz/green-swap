package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.user.UserDTO;

public interface CoinService {
    void addCoins(UserDTO user, Integer coins);
}
