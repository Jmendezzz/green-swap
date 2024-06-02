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

interface RestPasswordFormStructure {
    newPassword: string;
    confirmPassword: string;
    
}
function ResetPasswordForm() {
  const { register, watch, formState:{errors}, getValues } = useForm<RestPasswordFormStructure>({
    mode: 'onTouched',
  });
  return (
    <form       className="flex flex-col w-full items-center gap-10"
    >
      <FormRow error={errors?.newPassword?.message} >
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
                value === getValues('newPassword') || 'Las contraseñas no coinciden',
            })}
            />
        </FormRow>
        <Button type="submit" variant='primary'>Restablecer contraseña</Button>
    </form>
  );
}

export default ResetPasswordForm;
