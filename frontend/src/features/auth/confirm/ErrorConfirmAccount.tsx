import { ROUTES } from '@/constants/routes';
import Button from '@/features/ui/Button';
import Heading from '@/features/ui/Heading';
import Row from '@/features/ui/Row';
import { HiXCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

interface Props {
  error?: string;
}

function ErrorConfirmAccount({ error }: Props) {
  return (
    <Row type="vertical">
      <header>
        <Heading type="h1">Error al confirmar la cuenta</Heading>
      </header>
      <HiXCircle className="text-red-500" size={150} />
      <p className="text-5xl">
        {error || 'Ocurrió un error al confirmar la cuenta.'}
      </p>
      <Link to={ROUTES.sendEmailConfirmation} className='mt-10'>
        <Button variant="primary">Reenviar correo de confirmación</Button>
      </Link>
    </Row>
  );
}

export default ErrorConfirmAccount;
