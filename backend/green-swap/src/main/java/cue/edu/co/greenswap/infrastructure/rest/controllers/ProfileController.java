package cue.edu.co.greenswap.infrastructure.rest.controllers;


import cue.edu.co.greenswap.application.ports.usecases.FileService;
import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.UpdateUserPasswordDTO;
import cue.edu.co.greenswap.domain.dtos.user.UpdateUserProfileDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@AllArgsConstructor
@RequestMapping("/profile")
public class ProfileController {

  private final UserService service;
  private final FileService fileService;
  @PutMapping(value = "/update",consumes = MediaType.MULTIPART_FORM_DATA_VALUE )
  public ResponseEntity<UserDTO> updateProfile(
          @RequestPart("updateProfileInfo") @Valid UpdateUserProfileDTO updateProfileDTO,
          @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture
  ) {
    if(profilePicture != null){
      String profilePictureUrl = fileService.uploadFile(profilePicture).get("url").toString();
      UpdateUserProfileDTO withProfilePicture =  updateProfileDTO.withProfilePicture(profilePictureUrl);
      return ResponseEntity.ok(service.updateProfile(withProfilePicture));
    }
    return ResponseEntity.ok(service.updateProfile(updateProfileDTO));
  }

  @PutMapping(value = "/update-password")
  public ResponseEntity<Boolean> updatePassword(@RequestBody @Valid UpdateUserPasswordDTO updatePasswordDTO){
    service.updatePassword(updatePasswordDTO);
    return ResponseEntity.ok(true);
  }

}
