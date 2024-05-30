import { getUserExchangesOffers } from "@/services/userService";
import { useState } from "react";
import { useQuery } from "react-query";

function useUserExchangesOffers(){

    const [pageable, setPageable] = useState({page: 0, size: 10})

    const {data, status} = useQuery({
        queryKey: 'userExchangesOffers',
        queryFn: () => getUserExchangesOffers(pageable)
    })

    return {
        data: data?.data,
        isLoading: status === 'loading',
        setPageable,
        pageable
    }

}

export default useUserExchangesOffers;