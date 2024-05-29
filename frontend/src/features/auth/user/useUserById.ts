import { getUserByIdService } from "@/services/userService";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useUserById(){
    const { userId } = useParams();
    if(!userId){
        throw new Error('userId is required');
    }

    const { data, status} = useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUserByIdService(userId),
    })

    return {
        user: data?.data,
        isLoading: status === 'loading',
    }
}

export default useUserById;