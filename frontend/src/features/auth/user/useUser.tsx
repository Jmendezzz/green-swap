import { useUserContext } from "@/context/UserContext";
import { getBasicInfoCurrentUser } from "@/services/authService";
import { useMutation} from "react-query";

function useUser(){
    const {setUser} = useUserContext();
    const {mutate:getUser, isLoading} = useMutation({
        mutationFn: getBasicInfoCurrentUser,
        onSuccess: (user) => {
            setUser(user);
        },
        onError: () => {
            setUser(null);
        }
    })

    return {getUser, isLoading};

}

export default useUser;