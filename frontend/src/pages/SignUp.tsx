import { SignUpContextProvider } from '@/context/SignUpContext';
import SignUpForm from '@/features/auth/signup/SignUpForm';
import AuthStyledSection from '@/features/ui/AuthStyledSection';

function SignUp() {
  return (
    <AuthStyledSection>
      <SignUpContextProvider>
        <SignUpForm />
      </SignUpContextProvider>
    </AuthStyledSection>
  );
}

export default SignUp;
