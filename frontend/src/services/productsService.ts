import { SearchCriteriaProductDTO } from "@/domain/product/SearchCriteriaProductDTO";
import { axiosInstace } from "./axiosConfig";
import { Pageable, PageableResult } from "@/domain/pageable/Pageable";
import { ListProductDTO } from "@/domain/product/ListProductDTO";
import { AxiosResponse } from "axios";

 const REQUEST_MAPPING = '/products';


export function getProductsByCriteriaService(searchCriteria: SearchCriteriaProductDTO, pageable: Pageable):  Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
    return axiosInstace.post(`${REQUEST_MAPPING}/search?page=${pageable.page}&size=${pageable.size}`, searchCriteria);
}