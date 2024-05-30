import { getUserExchangesRequested } from "@/services/userService";
import { useState } from "react";
import { useQuery } from "react-query";

function useUserExchangesRequested(){

    const [pageable, setPageable] = useState({page: 0, size: 10})

    const {data, status} = useQuery({
        queryKey: 'userExchangesRequested',
        queryFn: () => getUserExchangesRequested(pageable)
    })

    return {
        data: data?.data,
        isLoading: status === 'loading',
        setPageable
    }

}

export default useUserExchangesRequested;