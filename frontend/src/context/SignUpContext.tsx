import SignUpRequestDTO from "@/domain/auth/SignUpRequestDTO";
import { createContext, useContext, useState } from "react";

interface SignUpContextState {
    signUpData:SignUpRequestDTO;
    setSignUpData: (data: SignUpRequestDTO) => void;
}
const SignUpContext = createContext<SignUpContextState | undefined>(undefined);

export function SignUpContextProvider ({children}: {children: React.ReactNode | React.ReactNode[]}) {
    const [signUpData, setSignUpData] = useState<SignUpRequestDTO>({
        fisrtName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: ''
    });


    return (
        <SignUpContext.Provider value={{signUpData, setSignUpData}}>
            {children}
        </SignUpContext.Provider>
    );
}


export function useSignUpContext () {
    const context = useContext(SignUpContext);
    if (context === undefined) {
        throw new Error('useSignUpContext must be used within a SignUpContextProvider');
    }
    return context;
}
