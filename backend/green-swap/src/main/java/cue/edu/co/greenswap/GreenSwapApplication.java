package cue.edu.co.greenswap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class GreenSwapApplication {

	public static void main(String[] args) {
		SpringApplication.run(GreenSwapApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry
								.addMapping("/**")
								.allowedMethods(CorsConfiguration.ALL)
								.allowedHeaders(CorsConfiguration.ALL)
								.allowCredentials(true)
								.allowedOrigins("http://localhost:5173");
			}
		};

	}
}
