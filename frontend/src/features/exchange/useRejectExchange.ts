import { rejectExchangeService } from "@/services/exchangeService";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "react-query"

function useRejectExchange(){
    const queryClient = useQueryClient();

    const {mutate:rejectExchange, status} = useMutation({
        mutationFn: (exchangeId: string) => rejectExchangeService(exchangeId),
        onSuccess: () => {
            queryClient.invalidateQueries('userExchangesOffers');
            toast.success('El intercambio fue rechazado con éxito');
        },
        onError: () => {
            toast.error('Ocurrió un error al rechazar el intercambio');
        }
    })

    return {
        rejectExchange,
        isLoading: status === 'loading'
    }

}

export default useRejectExchange