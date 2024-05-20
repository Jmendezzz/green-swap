import { ROUTES } from "@/constants/routes";
import { useUserContext } from "@/context/UserContext";
import { logoutService } from "@/services/authService";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate();
    const {setUser} = useUserContext();
    const {mutate:logout, isLoading} = useMutation(
        {
            mutationFn: () => logoutService(),
            onSuccess:() =>{
                setUser(null);
                navigate(ROUTES.home);
            }
        }
    )
    return {logout, isLoading}
}