package cue.edu.co.greenswap.application.ports.usecases;

import cue.edu.co.greenswap.domain.dtos.notification.NotificationDTO;
import cue.edu.co.greenswap.domain.dtos.exchange.ExchangeDTO;
import cue.edu.co.greenswap.domain.dtos.product.ListProductDTO;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UpdateUserPasswordDTO;
import cue.edu.co.greenswap.domain.dtos.user.UpdateUserProfileDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.domain.models.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface UserService {
  UserDTO create(CreateUserDTO user);
  Optional<UserDTO> getByEmail(String email);
    Optional<UserDTO> getById(Long id);
  UserDTO setVerified(UserDTO user);
  UserDTO update(UserDTO user);
  UserDTO updateProfile(UpdateUserProfileDTO user);
  Boolean updatePassword(UpdateUserPasswordDTO updateUserPasswordDTO);
  void resetPassword(String email, String password, String confirmPassword);

  Page<ListProductDTO> getUserProducts(Pageable pageable);

  Page<ExchangeDTO> getUserExchangesOffers(Pageable pageable);
  Page<ExchangeDTO> getUserExchangesRequested(Pageable pageable);
  List<NotificationDTO> getUserNotifications();
  void addCoins(User user, Integer coins);
}
