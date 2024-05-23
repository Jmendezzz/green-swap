import { UpdateUserProfileDTO } from '@/domain/user/UpdateUserProfileDTO';
import { updateUserProfileService } from '@/services/profileService';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';

function useUpdateProfile() {
  const { mutate, error, status } = useMutation({
    mutationFn: (data: UpdateUserProfileDTO) => updateUserProfileService(data),
    onSuccess: () => {
      toast.success('Perfil actualizado correctamente!');
    },
    onError: () => {
      toast.error('Error al actualizar el perfil');
    },
  });

  return {
    updateProfile: mutate,
    error,
    isLoading: status === 'loading',
  };
}

export default useUpdateProfile;
