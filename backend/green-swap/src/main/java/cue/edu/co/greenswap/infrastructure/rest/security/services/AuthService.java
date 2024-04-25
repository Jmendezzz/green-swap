package cue.edu.co.greenswap.infrastructure.rest.security.services;

import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.CreateUserDTO;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthSignupRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthLoginRequestDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthMapperDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.dtos.AuthResponseDTO;
import cue.edu.co.greenswap.infrastructure.rest.security.utils.JwtUtil;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {
    private final JwtUtil jwtUtil;
    private final UserDetailServiceImp userDetailServiceImp;
    private final PasswordEncoder passwordEncoder;
    private final UserService userService;
    private final AuthMapperDTO mapper;

    public AuthResponseDTO login(AuthLoginRequestDTO authLoginRequestDTO) {
        String email = authLoginRequestDTO.email();
        String password = authLoginRequestDTO.password();

        Authentication authentication = authenticate(email, password);
        String token = jwtUtil.generateToken(authentication);

        UserDTO userDTO = userService.getByEmail(email).get();
        return new AuthResponseDTO(userDTO.email(),userDTO.urlProfilePicture(),"User Logged in", token);
    }

    public AuthResponseDTO signUp(AuthSignupRequestDTO authLoginRequestDTO) {
        String email = authLoginRequestDTO.email();
        String password = authLoginRequestDTO.password();

        UserDTO userDTO = userService.create(mapper.toCreateUserDTO(authLoginRequestDTO));

        Authentication authentication = authenticate(email, password);
        String token = jwtUtil.generateToken(authentication);

        return new AuthResponseDTO(userDTO.email(),userDTO.urlProfilePicture(),"User Logged in", token);
    }


    public Authentication authenticate(String email, String password) {
        UserDetails userDetails = userDetailServiceImp.loadUserByUsername(email);
        if(userDetails == null){
            throw new BadCredentialsException("User not found"); //Todo change exception message
        }
        if(!passwordEncoder.matches(password, userDetails.getPassword())){
            throw new BadCredentialsException("Invalid password"); //Todo change exception message
        }

        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }






}
