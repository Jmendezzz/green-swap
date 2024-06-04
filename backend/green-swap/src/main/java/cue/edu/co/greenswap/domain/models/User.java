package cue.edu.co.greenswap.domain.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.time.LocalTime;

@AllArgsConstructor
@Getter
@Setter
public class User {
  private Long id;
  private String firstName;
  private String lastName;
  private String email;
  private String phoneNumber;
  private String urlProfilePicture;
  private String password;
  private Integer coins;
  private LocalDateTime createdAt;
  private boolean isVerified;
}
