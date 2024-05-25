import { useUserContext } from '@/context/UserContext';
import LoginRequestDTO from '@/domain/auth/LoginRequestDTO';
import { getBasicInfoCurrentUser, loginService } from '@/services/authService';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export interface ErrorResponse {
  message: string;
  status: number;
}

export function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const { mutate, status, error, isSuccess } = useMutation({
    mutationFn: (loginRequest: LoginRequestDTO) =>
      loginService(loginRequest.email, loginRequest.password),
    onSuccess: async () => {
      const user = await getBasicInfoCurrentUser();
      setUser(user);
      navigate('/');
    },
    onError: (error: AxiosError<ErrorResponse>) => {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error inesperado, por favor intenta de nuevo');
      }
    },
  });
  return {
    login: mutate,
    isLoading: status === 'loading',
    error,
    isSuccess,
  };
}
