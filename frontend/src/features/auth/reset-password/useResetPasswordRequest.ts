import { ROUTES } from '@/constants/routes';
import { ResetPasswordRequestDTO } from '@/domain/auth/ResetPasswordRequestDTO';
import { sendResetPasswordService } from '@/services/authService';
import { CustomError } from '@/utils/customError';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

function useResetPasswordRequest() {
    const navigate = useNavigate();
  const {
    mutate: sendResetPasswordRequest,
    status,
  } = useMutation({
    mutationFn: (data: ResetPasswordRequestDTO) =>
      sendResetPasswordService(data),
    onSuccess:() =>{
        toast.success('Se ha enviado un correo con las instrucciones para recuperar tu contraseña.');
        navigate(ROUTES.login);
    },
    onError:(error:AxiosError<CustomError>) => {
        if(error.response?.data){
            toast.error(error.response.data.message);
        }else{
            toast.error('Error inesperado, por favor intenta de nuevo');
        }
    }
  });

  return { sendResetPasswordRequest, isLoading: status === 'loading'};
}
export default useResetPasswordRequest;
