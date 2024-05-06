package cue.edu.co.greenswap.application.ports.usecases;

import org.springframework.web.multipart.MultipartFile;

import java.util.Map;


public interface FileService {
  Map<?,?> uploadFile(MultipartFile file);
}
