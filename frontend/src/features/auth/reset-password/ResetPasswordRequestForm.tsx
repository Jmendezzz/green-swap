import AuthFormContainer from '@/features/ui/AuthFormContainer';
import FormRow from '@/features/ui/FormRow';
import Heading from '@/features/ui/Heading';
import Input from '@/features/ui/Input';
import useResetPasswordRequest from './useResetPasswordRequest';
import { useForm } from 'react-hook-form';
import { ResetPasswordRequestDTO } from '@/domain/auth/ResetPasswordRequestDTO';
import Button from '@/features/ui/Button';
import Spinner from '@/features/ui/Spinner';

function ResetPasswordRequestForm() {
  const { sendResetPasswordRequest, isLoading } = useResetPasswordRequest();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ResetPasswordRequestDTO>({
    mode: 'onTouched',
  });

  function submitHandler(data: ResetPasswordRequestDTO) {
    sendResetPasswordRequest(data);
  }
  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col w-full items-center gap-10 text-center"
    >
      <AuthFormContainer type="vertical">
        <header>
          <Heading>Recupera tu contraseña</Heading>
          <p>
            Ingresa tu correo electrónico y te enviaremos un enlace para que
            puedas recuperar tu contraseña.
          </p>
        </header>

        <div className="w-full">
          <FormRow error={errors.email?.message}>
            <Input
              type="text"
              placeholder="Correo electronico"
              variant="outlined"
              {...register('email', {
                required: {
                  value: true,
                  message: 'El correo electronico es requerido',
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'El correo electronico no es válido',
                },
              })}
            />
          </FormRow>
        </div>
        <div>
          <Button variant="primary" type="submit">
            {isLoading ? <Spinner /> : 'Enviar'}
          </Button>
        </div>
      </AuthFormContainer>
    </form>
  );
}

export default ResetPasswordRequestForm;
