import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { axiosInstace } from "./axiosConfig";
import { AxiosResponse } from "axios";
import { ExchangeDTO } from "@/domain/exchange/ExchangeDTO";


const REQUEST_MAPPING = '/exchanges';


export function createExchangeService(data: CreateExchangeDTO){
    return axiosInstace.post(REQUEST_MAPPING, data);
}

export function acceptExchangeService(exchangeId: string){
    return axiosInstace.put(`${REQUEST_MAPPING}/${exchangeId}/accept`);
}
export function rejectExchangeService(exchangeId: string){
    return axiosInstace.put(`${REQUEST_MAPPING}/${exchangeId}/reject`);
}
export function getExchangeByIdService(exchangeId: string): Promise<AxiosResponse<ExchangeDTO>>{
    return axiosInstace.get(`${REQUEST_MAPPING}/${exchangeId}`);
}