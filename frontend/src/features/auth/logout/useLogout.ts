import { ROUTES } from "@/constants/routes";
import { logoutService } from "@/services/authService";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate();
    const {mutate:logout, isLoading} = useMutation(
        {
            mutationFn: () => logoutService(),
            onSuccess:() =>{
                navigate(ROUTES.home);
            }
        }
    )
    return {logout, isLoading}
}