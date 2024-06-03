import FormRow from '@/features/ui/FormRow';
import PasswordInput from '@/features/ui/PasswordInput';
import { useForm } from 'react-hook-form';
import {
  hasNumber,
  hasSpecialCharacter,
  hasUpperCase,
} from '../signup/utils/passwordRegexFunctions';
import PasswordStrengthIndicator from '../signup/PasswordStrengthIndicator';
import Button from '@/features/ui/Button';
import useResetPassword from './useResetPassword';
import { ResetPasswordDTO } from '@/domain/auth/ResetPasswordDTO';
import Spinner from '@/features/ui/Spinner';
import { useSearchParams } from 'react-router-dom';
import AuthFormContainer from '@/features/ui/AuthFormContainer';

interface ResetPasswordFormStructure {
  newPassword: string;
  confirmPassword: string;
}
function ResetPasswordForm() {
  const { resetPassword, isLoading } = useResetPassword();
  const [seachParams] = useSearchParams();
  const {
    register,
    watch,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<ResetPasswordFormStructure>({
    mode: 'onTouched',
  });

  function onSubmit(data: ResetPasswordFormStructure) {
    const submitData: ResetPasswordDTO = {
      password: data.newPassword,
      confirmPassword: data.confirmPassword,
      token: seachParams.get('token') || '',
    };
    resetPassword(submitData);
  }
  return (
    <form
      className="flex flex-col w-full items-center justify-center gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <AuthFormContainer type="vertical">
        <FormRow error={errors?.newPassword?.message}>
          <PasswordInput
            placeholder="Ingresa tu nueva contraseña"
            register={register('newPassword', {
              required: 'La contraseña es requerida',
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres',
              },
              validate: {
                hasUpperCase: (value) =>
                  hasUpperCase(value) ||
                  'La contraseña debe tener al menos una letra mayúscula',
                hasNumber: (value) =>
                  hasNumber(value) ||
                  'La contraseña debe tener al menos un número',
                hasSpecialCharacter: (value) =>
                  hasSpecialCharacter(value) ||
                  'La contraseña debe tener al menos un caracter especial',
              },
            })}
          />
          <PasswordStrengthIndicator password={watch('newPassword')} />
        </FormRow>
        <FormRow error={errors.confirmPassword?.message}>
          <PasswordInput
            placeholder="Confirma tu nueva contraseña"
            register={register('confirmPassword', {
              required: 'La contraseña es requerida',
              validate: (value) =>
                value === getValues('newPassword') ||
                'Las contraseñas no coinciden',
            })}
          />
        </FormRow>
        <Button type="submit" variant="primary">
          {isLoading ? <Spinner /> : 'Cambiar contraseña'}
        </Button>
      </AuthFormContainer>
    </form>
  );
}

export default ResetPasswordForm;
