import LoginRequestDTO from '@/domain/LoginRequestDTO';
import { loginService } from '@/services/authService';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';


interface AxiosError{
  response: {
    data: {
      message: string;
      status: number;
    }
  }

}

export function useLogin() {
  const navigate = useNavigate();
  
  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: (loginRequest: LoginRequestDTO) =>
      loginService(loginRequest.email, loginRequest.password),
    onSuccess: ()=> navigate('/'),
    onError: (error: AxiosError) => console.error(error.response.data.message),
  });
  return {
    login: mutate,
    isLoading,
    error,
    isSuccess
  };
}
