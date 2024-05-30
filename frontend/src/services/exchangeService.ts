import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { axiosInstace } from "./axiosConfig";


const REQUEST_MAPPING = '/exchanges';


export function createExchangeService(data: CreateExchangeDTO){
    return axiosInstace.post(REQUEST_MAPPING, data);
}

export function acceptExchangeService(exchangeId: string){
    return axiosInstace.put(`${REQUEST_MAPPING}/${exchangeId}/accept`);
}