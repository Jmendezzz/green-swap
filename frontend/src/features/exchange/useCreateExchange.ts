import { ROUTES } from "@/constants/routes";
import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { createExchangeService } from "@/services/exchangeService";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

function useCreateExchange(){
    const navigate = useNavigate();
    const {mutate, status} = useMutation(
        {
            mutationFn: (data: CreateExchangeDTO) => createExchangeService(data),
            onSuccess: () => {
                toast.success('¡Intercambio creado con éxito!');
                navigate(ROUTES.myExchanges);
            }
        }
    );

    return{
        createExchange: mutate,
        isLoading: status === 'loading'
    }
}

export default useCreateExchange;