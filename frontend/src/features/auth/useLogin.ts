import { loginService } from '@/services/authService';
import { useMutation } from 'react-query';

interface AuthLoginRequestDTO {
  email: string;
  password: string;
}

export function useLogin() {
  const { mutate, isLoading } = useMutation({
    mutationFn: (loginRequest: AuthLoginRequestDTO) =>
      loginService(loginRequest.email, loginRequest.password),
    onSuccess: (data) => console.log(data),
    onError: (error) => console.error(error),
  });
  return {
    login: mutate,
    isLoading,
  };
}
