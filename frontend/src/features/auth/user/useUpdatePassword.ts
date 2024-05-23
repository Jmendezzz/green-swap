import { UpdateUserPasswordDTO } from '@/domain/user/UpdateUserPasswordDTO';
import { updatePasswordService } from '@/services/profileService';
import { CustomError } from '@/utils/customError';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';


function useUpdatePassword() {
  const {status,mutate} = useMutation({
    mutationFn: (data: UpdateUserPasswordDTO) => updatePasswordService(data),
    onSuccess: () => {
        toast.success('Contraseña actualizada correctamente');
    },onError: (error: AxiosError<CustomError>) => {
        if(error.response?.data.message){
            toast.error(error.response.data.message);
            return;
        }
        toast.error('Error al actualizar la contraseña');
    }
  });

  return{
        updatePassword: mutate,
        isLoading: status === 'loading'
  }
}

export default useUpdatePassword;
