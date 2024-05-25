import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { createExchangeService } from "@/services/exchangeService";
import toast from "react-hot-toast";
import { useMutation } from "react-query";

function useCreateExchange(){
    const {mutate, status} = useMutation(
        {
            mutationFn: (data: CreateExchangeDTO) => createExchangeService(data),
            onSuccess: () => {
                toast.success('¡Intercambio creado con éxito!');
            }
        }
    );

    return{
        createExchange: mutate,
        isLoading: status === 'loading'
    }
}

export default useCreateExchange;