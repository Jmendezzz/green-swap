import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

function LoginForm() {
  return (
    <form
      action=""
      className="flex flex-col w-full items-center gap-10"
    >
      <div className="space-y-10 w-full">
        <Input
          type="text"
          variant="outlined"
          placeholder="Correo electronico"
        />
        <Input
          type="password"
          variant="outlined"
          placeholder="Contraseña"
        />
      </div>

      <div className="text-right w-full">
        <Link to={'/'} className="underline">
          ¿Olvidaste tú contraseña?
        </Link>
      </div>
      <Button
        variant="primary"
        className="w-[200px] min-w-[100px]"
      >
        Ingresar
      </Button>
      <div className="p-10">
        <p>
          ¿No tienes una cuenta?{' '}
          <Link to={'/signup'} className="text-contrast underline">
            Registrate
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
