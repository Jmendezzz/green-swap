import { ROUTES } from '@/constants/routes';
import { ResetPasswordDTO } from '@/domain/auth/ResetPasswordDTO';
import { resetPasswordService } from '@/services/authService';
import { CustomError } from '@/utils/customError';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

function useResetPassword() {
  const navigate = useNavigate();
  const { mutate: resetPassword, status } = useMutation({
    mutationFn: (data: ResetPasswordDTO) => resetPasswordService(data),
    onSuccess: () => {
      toast.success('La contraseña se ha cambiado correctamente');
      navigate(ROUTES.login);
    },
    onError: (error: AxiosError<CustomError>) => {
      if (error.response?.data) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Error inesperado, intenta nuevamente.');
      }
    },
  });
  return {
    resetPassword,
    isLoading: status == 'loading',
  };
}
export default useResetPassword;
