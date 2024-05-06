package cue.edu.co.greenswap.infrastructure.adapters.usecases;

import com.cloudinary.Cloudinary;
import cue.edu.co.greenswap.application.constants.FileConstantMessage;
import cue.edu.co.greenswap.application.ports.usecases.FileService;
import cue.edu.co.greenswap.infrastructure.exceptions.FileException;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@Service
@AllArgsConstructor
public class FileServiceCloudinaryImp implements FileService {
  private Cloudinary cloudinary;

  @Override
  public Map uploadFile(MultipartFile file) {
    try{
      return cloudinary.uploader().upload(file.getBytes(), Map.of("resource_type", "auto"));
    } catch (IOException e) {
      throw new FileException(FileConstantMessage.ERROR_UPLOADING_IMAGE, HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }
}
