import SignUpRequestDTO from '@/domain/auth/SignUpRequestDTO';
import useMultiStepForm from '@/hooks/useMultiStepForm';
import { createContext, useContext, useState } from 'react';

interface SignUpContextState {
  signUpData: SignUpRequestDTO;
  addSignUpData: (data: Partial<SignUpRequestDTO>) => void;
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

  return (
    <SignUpContext.Provider
      value={{
        signUpData,
        addSignUpData,
        currentStep,
        stepsNumber: STEPS_NUMBER,
        nextStep: next,
        prevStep: prev,
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
