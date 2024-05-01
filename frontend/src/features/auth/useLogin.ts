import { loginService } from '@/services/authService';
import { useMutation } from 'react-query';

interface AuthLoginRequestDTO {
  email: string;
  password: string;
}

interface AxiosError{
  response: {
    data: {
      message: string;
      status: number;
    }
  }

}

export function useLogin() {
  const { mutate, isLoading } = useMutation({
    mutationFn: (loginRequest: AuthLoginRequestDTO) =>
      loginService(loginRequest.email, loginRequest.password),
    onSuccess: (data) => console.log(data),
    onError: (error: AxiosError) => console.error(error.response.data.message),
  });
  return {
    login: mutate,
    isLoading,
  };
}
