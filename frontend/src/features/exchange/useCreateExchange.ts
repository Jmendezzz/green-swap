import { ROUTES } from "@/constants/routes";
import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { createExchangeService } from "@/services/exchangeService";
import { CustomError } from "@/utils/customError";
import { AxiosError } from "axios";
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
            },
            onError:(error:AxiosError<CustomError>) => {
                if(error.response?.data){
                    toast.error(error.response.data.message);
                }else{
                    toast.error('Ocurrió un error al crear el intercambio');
                }
                

            }
        }
    );

    return{
        createExchange: mutate,
        isLoading: status === 'loading'
    }
}

export default useCreateExchange;