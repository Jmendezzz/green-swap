package cue.edu.co.greenswap.infrastructure.rest.security.utils;


import cue.edu.co.greenswap.application.ports.usecases.UserService;
import cue.edu.co.greenswap.domain.dtos.user.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@AllArgsConstructor
public class AuthenticationUtil {
    private UserService userService;

    public UserDTO getUser(){
        String authenticatedUser = SecurityContextHolder.getContext().getAuthentication().getName();
        return userService.getByEmail(authenticatedUser).get();
    }
}
