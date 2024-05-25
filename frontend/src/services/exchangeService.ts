import { CreateExchangeDTO } from "@/domain/exchange/CreateExchangeDTO";
import { axiosInstace } from "./axiosConfig";


const REQUEST_MAPPING = '/exchanges';


export function createExchangeService(data: CreateExchangeDTO){
    return axiosInstace.post(REQUEST_MAPPING, data);
}