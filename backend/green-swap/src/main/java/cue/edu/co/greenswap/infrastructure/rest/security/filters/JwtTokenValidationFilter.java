package cue.edu.co.greenswap.infrastructure.rest.security.filters;

import com.auth0.jwt.interfaces.DecodedJWT;
import cue.edu.co.greenswap.infrastructure.rest.security.services.AuthService;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.JwtUtil;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.WebUtils;

import java.io.IOException;
import java.util.Collections;

public class JwtTokenValidationFilter extends OncePerRequestFilter {
  private final JwtUtil jwtUtil;
  private String cookieName;

  private AuthService authService;
  public JwtTokenValidationFilter(JwtUtil jwtUtil, String cookieName, AuthService authService) {
    this.cookieName = cookieName;
    this.jwtUtil = jwtUtil;
    this.authService = authService;
  }


  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

    String token = getToken(request);

    if(token != null ){
      try{
        DecodedJWT decodedJWT = jwtUtil.validateToken(token);

        String username = jwtUtil.extractUsername(decodedJWT);

        SecurityContext context = SecurityContextHolder.getContext();

        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, Collections.emptyList());

        context.setAuthentication(authentication);

        SecurityContextHolder.setContext(context);
      }catch (Exception e){
        authService.logout(response);
      }

    }

    filterChain.doFilter(request, response);
  }

  private String getToken(HttpServletRequest request){
    Cookie cookie = WebUtils.getCookie(request, cookieName);
    return cookie != null ? cookie.getValue() : null;
  }
}
