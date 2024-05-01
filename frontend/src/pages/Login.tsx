import LoginForm from '@/features/auth/LoginForm';
import Heading from '@/features/ui/Heading';
import Logo from '@/features/ui/Logo';
import Row from '@/features/ui/Row';
import Section from '@/features/ui/Section';
import { Devices } from '@/styles/Devices';
import styled from 'styled-components';


function Login() {
  return (
    <LoginSection>
      <Row type="vertical" className='gap-20'>
        <Logo/>
        <FormContainer type="vertical">
          <Heading type="h1">Inicia Sesión</Heading>
          <LoginForm/>
        </FormContainer>
      </Row>
    </LoginSection>
  );
}

const LoginSection = styled(Section)`
  background-image: url('assets/login-background.png');
  background-size: cover;
  background-position:bottom;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

const FormContainer = styled(Row)`
  background-color: #212b38;
  background-color: rgba(33, 43, 56, 0.5);
  width: 60%;
  gap: 2rem;
  max-width: 700px;
  min-width: 300px;
  padding: 8rem 5rem;
  border-radius: 2.5rem;
  box-shadow: 0 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
  @media (max-width: ${Devices.tablet}) {
    width: 90%;
    padding: 4rem 2rem;
    font-size: 1.3rem;
  }
  @media (max-width: ${Devices.laptop}) {
    width: 70%;
    padding: 4rem 2rem;
  }
`;

export default Login;
