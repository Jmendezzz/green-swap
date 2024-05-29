import LoginForm from '@/features/auth/login/LoginForm';
import Heading from '@/features/ui/Heading';
import Logo from '@/features/ui/Logo';
import Row from '@/features/ui/Row';
import Section from '@/features/ui/Section';
import styled from 'styled-components';
import AuthFormContainer from '@/features/ui/AuthFormContainer';


function Login() {
  return (
    <LoginSection>
      <Row type="vertical" className='gap-20'>
        <Logo/>
          <AuthFormContainer type="vertical">
          <Heading type="h1">Inicia Sesión</Heading>
          <LoginForm/>
        </AuthFormContainer>
      </Row>
    </LoginSection>
  );
}

const LoginSection = styled(Section)`
  background-image: url('assets/login-background.png');
  background-size: cover;
  background-position:bottom;
  background-repeat: no-repeat;
  min-height: 100%;
`;

export default Login;
