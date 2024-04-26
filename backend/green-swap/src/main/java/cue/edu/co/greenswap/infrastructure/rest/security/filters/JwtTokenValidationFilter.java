package cue.edu.co.greenswap.infrastructure.rest.security.filters;

import com.auth0.jwt.interfaces.DecodedJWT;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Collections;

@AllArgsConstructor
public class JwtTokenValidationFilter extends OncePerRequestFilter {
  private final JwtUtil jwtUtil;
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    String token = request.getHeader(HttpHeaders.AUTHORIZATION);

    if(token != null && token.startsWith("Bearer ")){
      token = token.substring(7);

      DecodedJWT decodedJWT = jwtUtil.validateToken(token);

      String username = jwtUtil.extractUsername(decodedJWT);

      SecurityContext context = SecurityContextHolder.getContext();

      Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());

      context.setAuthentication(authentication);

      SecurityContextHolder.setContext(context);
    }

    filterChain.doFilter(request, response);
  }
}
