package cue.edu.co.greenswap.infrastructure.rest.security.services;

import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthSignupRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthLoginRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthMapperDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthResponseDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.CookieUtil;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final JwtUtil jwtUtil;
    private final CookieUtil cookieUtil;
    private final UserDetailServiceImp userDetailServiceImp;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    private final AuthMapperDTO mapper;
    public AuthService(JwtUtil jwtUtil, CookieUtil cookieUtil, UserDetailServiceImp userDetailServiceImp, PasswordEncoder passwordEncoder, UserService userService, AuthMapperDTO mapper) {
        this.jwtUtil = jwtUtil;
        this.cookieUtil = cookieUtil;
        this.userDetailServiceImp = userDetailServiceImp;
        this.passwordEncoder = passwordEncoder;
        this.userService = userService;
        this.mapper = mapper;
    }

    @Value("${cookie-name}")
    private String cookieName;

    public AuthResponseDTO login(AuthLoginRequestDTO authLoginRequestDTO, HttpServletResponse response) {
        String email = authLoginRequestDTO.email();
        String password = authLoginRequestDTO.password();

        Authentication authentication = authenticate(email, password);
        String token = jwtUtil.generateToken(authentication);

        cookieUtil.create(response, cookieName, token, false, -1, "localhost");

        UserDTO userDTO = userService.getByEmail(email).get();
        return new AuthResponseDTO(userDTO.email(),userDTO.urlProfilePicture(),"User Logged in", token);
    }

    public AuthResponseDTO signUp(AuthSignupRequestDTO authLoginRequestDTO) {
        String email = authLoginRequestDTO.email();
        String password = authLoginRequestDTO.password();

        UserDTO userDTO = userService.create(mapper.toCreateUserDTO(authLoginRequestDTO));

        Authentication authentication = authenticate(email, password);
        String token = jwtUtil.generateToken(authentication);

        return new AuthResponseDTO(userDTO.email(),userDTO.urlProfilePicture(),"User Signed up", token);
    }


    public Authentication authenticate(String email, String password) {
        UserDetails userDetails = userDetailServiceImp.loadUserByUsername(email);
        if(userDetails == null){
            throw new BadCredentialsException("User not found"); //Todo change exception message
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password"); //Todo change exception message
        }

        return new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
    }


}
