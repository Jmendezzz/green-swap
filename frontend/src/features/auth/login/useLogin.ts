import LoginRequestDTO from '@/domain/auth/LoginRequestDTO';
import { loginService } from '@/services/authService';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export interface AxiosApiError {
  response: {
    data: {
      message: string;
      status: number;
    };
  };
}

export function useLogin() {
  const navigate = useNavigate();

  const { mutate, isLoading, error, isSuccess } = useMutation({
    mutationFn: (loginRequest: LoginRequestDTO) =>
      loginService(loginRequest.email, loginRequest.password),
    onSuccess: () => navigate('/'),
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error('Error inesperado, por favor intenta de nuevo');
      } else {
        toast.error((error as AxiosApiError).response.data.message);
      }
    },
  });
  return {
    login: mutate,
    isLoading,
    error,
    isSuccess,
  };
}
