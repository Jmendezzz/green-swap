import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';
import { useForm } from 'react-hook-form';
import LoginRequestDTO from '@/domain/auth/LoginRequestDTO';
import { ClipLoader } from 'react-spinners';
import FormRow from '../../ui/FormRow';

function LoginForm() {
  const { login, isLoading } = useLogin();

  const { register, handleSubmit, formState:{errors} } = useForm<LoginRequestDTO>({
    mode: 'onTouched',
  });

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <form
      className="flex flex-col w-full items-center gap-10"
      onSubmit={onSubmit}
    >
      <div className="space-y-10 w-full">
        <FormRow error={errors?.email?.message}>
          <Input
            type="text"
            variant="outlined"
            placeholder="Correo electronico"
            {...register('email', {
              required: 'El correo electronico es requerido',
            })}
          />
        </FormRow>
        <FormRow error={errors?.password?.message}>
          <Input
            type="password"
            variant="outlined"
            placeholder="Contraseña"
            {...register('password', {
              required: 'La contraseña es requerida',
            })}
          />
          </FormRow>
      </div>

      <div className="text-right w-full">
        <Link to={'/'} className="underline hover:text-contrast transition-colors">
          ¿Olvidaste tú contraseña?
        </Link>
      </div>
      <Button
        type="submit"
        variant="primary"
        className="w-[200px] min-w-[100px]"
        disabled={isLoading}
      >
        {isLoading ? <ClipLoader color="#1B232E" size={15} /> : 'Ingresar'}
      </Button>
      <div className="p-10">
        <p>
          ¿No tienes una cuenta?{' '}
            <Link to={'/register'} className="text-contrast underline">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
