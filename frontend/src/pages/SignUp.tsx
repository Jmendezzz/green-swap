import { SignUpContextProvider } from '@/context/SignUpContext';
import SignUpForm from '@/features/auth/signup/SignUpForm';
import Row from '@/features/ui/Row';
import Section from '@/features/ui/Section';
import styled from 'styled-components';

function SignUp() {
  return (
    <SignUpSection>
      <Row type="vertical" className="gap-20 h-full items-center justify-center">
        <SignUpContextProvider>
          <SignUpForm />
        </SignUpContextProvider>
      </Row>
    </SignUpSection>
  );
}

const SignUpSection = styled(Section)`
  background-image: url('assets/login-background.png');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  background-attachment: scroll;
`;

export default SignUp;