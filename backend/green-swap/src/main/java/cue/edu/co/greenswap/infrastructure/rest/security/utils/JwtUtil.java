package cue.edu.co.greenswap.infrastructure.rest.security.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collections;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtUtil {
  @Value("${security.jwt.key}")
  private String key;
  @Value("${security.jwt.user.generator}")
  private String userGenerator;
  @Value("${security.jwt.expiration}")
  private Long expiration;


  public String generateToken(Authentication authentication){
    Algorithm algorithm = Algorithm.HMAC256(key);

    String username = authentication.getName();

    return JWT.create()
      .withIssuer(userGenerator)
      .withSubject(username)
      .withClaim("authorities", Collections.emptyList())
      .withIssuedAt(new Date(System.currentTimeMillis()))
      .withJWTId(UUID.randomUUID().toString())
      .withExpiresAt(new Date(System.currentTimeMillis() + expiration))
      .sign(algorithm);

  }

  public DecodedJWT validateToken(String token){

    try{
      Algorithm algorithm = Algorithm.HMAC256(key);

      return JWT.require(algorithm)
        .withIssuer(userGenerator)
        .build()
        .verify(token);
    } catch (Exception e){
      throw new JWTVerificationException("Invalid token");
    }

  }

  public String extractUsername(DecodedJWT token){
    return token.getSubject();
  }

}
