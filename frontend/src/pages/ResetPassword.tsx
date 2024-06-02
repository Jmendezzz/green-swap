import { ROUTES } from '@/constants/routes';
import ResetPasswordForm from '@/features/auth/reset-password/ResetPasswordForm';
import AuthFormContainer from '@/features/ui/AuthFormContainer';
import Heading from '@/features/ui/Heading';
import Logo from '@/features/ui/Logo';
import Row from '@/features/ui/Row';
import Section from '@/features/ui/Section';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function ResetPassword() {
  const { token } = useParams();
  return (
    <StyledResetPassword>
      <Row type='vertical'>
        <header className="flex flex-col items-center">
          <Link to={ROUTES.home}>
            <Logo />
          </Link>
          <Heading>Recupera tu contraseña</Heading>
        </header>
        <AuthFormContainer type="vertical">
          <ResetPasswordForm />
        </AuthFormContainer>
      </Row>
    </StyledResetPassword>
  );
}

const StyledResetPassword = styled(Section)`
  background-image: url('assets/login-background.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

export default ResetPassword;
