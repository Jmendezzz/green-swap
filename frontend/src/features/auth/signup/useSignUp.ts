import SignUpRequestDTO from "@/domain/auth/SignUpRequestDTO";
import { signUpService } from "@/services/authService";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { redirect } from "react-router-dom";
import { AxiosApiError } from "../login/useLogin";

function useSignUp(){
    const {mutate, isLoading} = useMutation({
        mutationFn: (data: SignUpRequestDTO) => signUpService(data),
        onSuccess: () => {
            redirect('/login')
        },
        onError: (error: unknown) => {
            if (error instanceof AxiosError) {
              toast.error('Error inesperado, por favor intenta de nuevo');
            } else {
              toast.error((error as AxiosApiError).response.data.message);
            }
          },
        });

    return {
        signUp: mutate,
        isLoading
    }

}

export default useSignUp;