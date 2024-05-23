import { UpdateUserPasswordDTO } from '@/domain/user/UpdateUserPasswordDTO';
import FormRow from '@/features/ui/FormRow';
import PasswordInput from '@/features/ui/PasswordInput';
import { useForm } from 'react-hook-form';
import useUpdatePassword from './useUpdatePassword';
import Button from '@/features/ui/Button';
import { hasUpperCase, hasNumber, hasSpecialCharacter } from '../signup/utils/passwordRegexFunctions';


function UpdatePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateUserPasswordDTO>({
    mode: 'onTouched',
  });
  const { updatePassword, isLoading } = useUpdatePassword();

  function onSubmit(data: UpdateUserPasswordDTO) {
    updatePassword(data);
  }
  return (
    <form
      className="h-full flex flex-col gap-10  w-[50%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-10">
        <FormRow error={errors?.currentPassword?.message}>
          <label htmlFor="currentPassword">Contraseña actual</label>
          <PasswordInput
            variant="non-outlined"
            placeholder=""
            register={register('currentPassword', {
              required: 'Este campo es requerido',
            })}
          />
        </FormRow>
        <FormRow error={errors?.newPassword?.message}>
          <label htmlFor="newPassword">Nueva contraseña</label>
          <PasswordInput
            placeholder=""
            variant="non-outlined"
            register={register('newPassword', {
              required: 'Este campo es requerido',
              minLength: {
                value: 8,
                message: 'Debe tener al menos 8 caracteres',
              },
              
              validate: {
                hasUpperCase: (value) =>
                  hasUpperCase(value) ||
                  'Debe contener al menos una letra mayúscula',
                hasNumber: (value) =>
                  hasNumber(value) || 'Debe contener al menos un número',
                hasSpecialCharacter: (value) =>
                  hasSpecialCharacter(value) ||
                  'Debe contener al menos un caracter especial',
              },
            })}
          />
        </FormRow>
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="primary">
          {isLoading ? 'Cargando...' : 'Actualizar contraseña'}
        </Button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
