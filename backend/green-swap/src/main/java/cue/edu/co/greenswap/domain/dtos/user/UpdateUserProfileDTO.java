package cue.edu.co.greenswap.domain.dtos.user;

public record UpdateUserProfileDTO(
        String firstName,
        String lastName,
        String phoneNumber,
        String urlProfilePicture
) {
  public UpdateUserProfileDTO withProfilePicture(String urlProfilePicture) {
    return new UpdateUserProfileDTO(firstName, lastName, phoneNumber, urlProfilePicture);
  }

}
