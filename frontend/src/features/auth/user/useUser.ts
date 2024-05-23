import { getBasicInfoCurrentUser } from "@/services/authService";
import { useQuery } from "react-query";

function useUser(){

    const {data, status,error} = useQuery({
        queryKey: 'user',
        queryFn: () => getBasicInfoCurrentUser(),
    });

    return {
        user: data,
        isLoading: status === 'loading',
        error,
    };

}

export default useUser;