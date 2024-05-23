import Heading from '@/features/ui/Heading';
import StyledLightContainer from '@/features/ui/StyledLightContainer';
import UpdatePasswordForm from './UpdatePasswordForm';
import { HiLockClosed } from 'react-icons/hi';

function UpdatePasswodPanel() {
  return (
    <StyledLightContainer className="flex flex-col items-center h-full">
      <Heading type="h1">Cambiar Contraseña</Heading>
      <HiLockClosed className="text-[20rem] text-white" />
      <UpdatePasswordForm />
    </StyledLightContainer>
  );
}

export default UpdatePasswodPanel;
