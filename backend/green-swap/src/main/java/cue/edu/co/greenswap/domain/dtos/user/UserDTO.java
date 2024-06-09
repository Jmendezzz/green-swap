package cue.edu.co.greenswap.domain.dtos.user;

import java.time.LocalDateTime;

public record UserDTO(
        Long id,
        String firstName,
        String lastName,
        String email,
        String urlProfilePicture,
        String phoneNumber,
        LocalDateTime createdAt,
        Integer coins,
        boolean isVerified
) {
  public UserDTO addCoins(Integer coins) {
    return new UserDTO(id, firstName, lastName, email, urlProfilePicture, phoneNumber, createdAt, this.coins + coins, isVerified);
  }
}
