import { getBasicInfoCurrentUser } from "@/services/authService";
import { useQuery } from "react-query";

function useUser(){
    const {data:user, isLoading} = useQuery({
        queryKey: ['user'],
        queryFn: getBasicInfoCurrentUser
    })

    return {user, isLoading};

}

export default useUser;