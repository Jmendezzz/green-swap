import { getExchangeByIdService } from "@/services/exchangeService";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useExchange(){
    const {exchangeId} = useParams();

    if(!exchangeId) throw new Error('exchangeId is required');

    const {data,status} = useQuery({
        queryKey: ['exchange', exchangeId],
        queryFn: () => getExchangeByIdService(exchangeId),
        retry:false
    })

    return {
        exchange: data?.data,
        isLoading: status === 'loading'
    }
}

export default useExchange;