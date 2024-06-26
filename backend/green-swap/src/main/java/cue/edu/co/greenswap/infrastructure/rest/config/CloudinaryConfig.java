package cue.edu.co.greenswap.infrastructure.rest.config;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.HashMap;
import java.util.Map;

@Configuration
public class CloudinaryConfig {
  @Value("${cloudinary.api_key}")
  private String key;
  @Value("${cloudinary.api_secret}")
  private String secret;
  @Value("${cloudinary.cloud_name}")
  private String cloudName;

  private Cloudinary cloudinary;
  @Bean
  public Cloudinary getCloudinary(){
    Map config = new HashMap();
    config.put("cloud_name", cloudName);
    config.put("api_key", key);
    config.put("api_secret", secret);
    return new Cloudinary(config);
  }
}
