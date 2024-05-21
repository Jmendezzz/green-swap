package cue.edu.co.greenswap.infrastructure.rest.security.config;


import cue.edu.co.greenswap.infrastructure.rest.security.filters.JwtTokenValidationFilter;
import cue.edu.co.greenswap.infrastructure.rest.security.services.AuthService;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfig {
  private final JwtUtil jwtUtil;
  private final Http401UnauthorizedEntryPoint http401UnauthorizedEntryPoint;
  private final AuthService authService;
  public SpringSecurityConfig(JwtUtil jwtUtil, Http401UnauthorizedEntryPoint http401UnauthorizedEntryPoint, AuthService authService) {
    this.jwtUtil = jwtUtil;
    this.http401UnauthorizedEntryPoint = http401UnauthorizedEntryPoint;
    this.authService = authService;
  }

  @Value("${cookie-name}")
  private String cookieName;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
            .csrf(AbstractHttpConfigurer::disable)
            .sessionManagement(sessionManagement -> sessionManagement
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeRequests(authorizeRequests -> {
              authorizeRequests.requestMatchers("/error").permitAll();
              authorizeRequests.requestMatchers("/auth/signup").permitAll();
              authorizeRequests.requestMatchers("/auth/login").permitAll();
              authorizeRequests.requestMatchers("/auth/confirm-email").permitAll();
              authorizeRequests.requestMatchers("/products/search").permitAll();
              authorizeRequests.requestMatchers("/products/{id}").permitAll();
              authorizeRequests.requestMatchers("/mail/send-reset-password").permitAll();
              authorizeRequests.anyRequest().authenticated();
            })
            .exceptionHandling(exceptionHandling -> exceptionHandling
                    .authenticationEntryPoint(http401UnauthorizedEntryPoint))
            .addFilterBefore(new JwtTokenValidationFilter(jwtUtil,cookieName,authService), BasicAuthenticationFilter.class)
            .build();

  }

  @Bean
  public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration) throws Exception {
    return authenticationConfiguration.getAuthenticationManager();
  }
}
