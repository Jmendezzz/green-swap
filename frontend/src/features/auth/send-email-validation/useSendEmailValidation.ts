import { sendEmailConfirmationService } from "@/services/authService";
import { useMutation } from "react-query";


function useSendEmailValidation() {

    const {mutate, isLoading,isSuccess, error} = useMutation(
        {
            mutationFn:()=> sendEmailConfirmationService(),
        }
    )

    return {sendEmailValidation:mutate, isLoading, error, isSuccess}
  
}

export default useSendEmailValidation;