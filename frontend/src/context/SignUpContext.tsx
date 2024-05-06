import SignUpRequestDTO from '@/domain/auth/SignUpRequestDTO';
import useSignUp from '@/features/auth/signup/useSignUp';
import useMultiStepForm from '@/hooks/useMultiStepForm';
import { createContext, useContext, useState } from 'react';

interface SignUpContextState {
  signUpData: SignUpRequestDTO;
  addSignUpData: (data: Partial<SignUpRequestDTO>) => void;
  submitSignUp: () => void;
  isLoading: boolean;
  currentStep: number;
  stepsNumber: number;
  nextStep: () => void;
  prevStep: () => void;
}
const SignUpContext = createContext<SignUpContextState | undefined>(undefined);

const STEPS_NUMBER = 3;

export function SignUpContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [signUpData, setSignUpData] = useState<SignUpRequestDTO>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    confirmPassword: '',
    password: '',
  });
  const addSignUpData = (data: Partial<SignUpRequestDTO>) => {
    setSignUpData((prev) => ({ ...prev, ...data }));
  };
  const { currentStep, next, prev } = useMultiStepForm(STEPS_NUMBER);

  const { signUp, isLoading } = useSignUp();

  const submitSignUp = () => {
    signUp(signUpData);
  }

  return (
    <SignUpContext.Provider
      value={{
        signUpData,
        addSignUpData,
        currentStep,
        stepsNumber: STEPS_NUMBER,
        nextStep: next,
        prevStep: prev,
        submitSignUp,
        isLoading,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
}

export function useSignUpContext() {
  const context = useContext(SignUpContext);
  if (context === undefined) {
    throw new Error(
      'useSignUpContext must be used within a SignUpContextProvider'
    );
  }
  return context;
}
