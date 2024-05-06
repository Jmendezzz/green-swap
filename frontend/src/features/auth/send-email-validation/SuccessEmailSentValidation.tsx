import Button from '@/features/ui/Button';
import Heading from '@/features/ui/Heading';
import Row from '@/features/ui/Row';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function SuccessEmailSentValidation() {
  return (
    <StyledContainer type="vertical" className="shadow-lg">
      <header className="flex flex-col items-center">
        <Heading>Verifica tu correo electronico</Heading>
        <HiOutlineMail size={150} />
      </header>
      <p>
        Hemos enviado un correo electronico a la direccion que nos
        proporcionaste. Por favor sigue las instrucciones para completar tu
        registro.
      </p>
      <Link to={'/'}>
        <Button variant='primary'>Regresar al inicio</Button>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled(Row)`
  padding: 7rem 5rem;
  border-radius: 3rem;
  background-color: #212b38;
  background-color: rgba(33, 43, 56, 0.5);
  width: 50%;
  max-width: 700px;
`;

export default SuccessEmailSentValidation;
