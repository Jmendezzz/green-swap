package cue.edu.co.greenswap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class GreenSwapApplication {

	public static void main(String[] args) {
		SpringApplication.run(GreenSwapApplication.class, args);
	}

}
