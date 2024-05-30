import { acceptExchangeService } from "@/services/exchangeService";
import toast from "react-hot-toast";
import { useMutation } from "react-query";


function useAcceptExchange(){

    const {mutate:acceptExchange, status} = useMutation({
        mutationFn: (exchangeId: string) => acceptExchangeService(exchangeId),
        onSuccess: () => {
            toast.success('El intercambio fue aceptado con éxito');
        },
        onError: () => {
            toast.error('Ocurrió un error al aceptar el intercambio');
        }
    })

    return {
        acceptExchange,
        isLoading: status === 'loading'
    }
}
export default useAcceptExchange