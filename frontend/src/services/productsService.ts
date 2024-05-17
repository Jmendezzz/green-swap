import { SearchCriteriaProductDTO } from "@/domain/product/SearchCriteriaProductDTO";
import { axiosInstace } from "./axiosConfig";
import { Pageable, PageableResult } from "@/domain/pageable/Pageable";
import { ListProductDTO } from "@/domain/product/ListProductDTO";
import { AxiosResponse } from "axios";
import { ProductDTO } from "@/domain/product/ProductDTO";

 const REQUEST_MAPPING = '/products';


export function getProductsByCriteriaService(searchCriteria: SearchCriteriaProductDTO, pageable: Pageable):  Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
    return axiosInstace.post(`${REQUEST_MAPPING}/search?page=${pageable.page}&size=${pageable.size}`, searchCriteria);
}

export function getProductByIdService(productId: number): Promise<AxiosResponse<ProductDTO>> {
    return axiosInstace.get(`${REQUEST_MAPPING}/${productId}`);
}

export function getProductsSuggestions(query: string): Promise<AxiosResponse<Array<string>>>{
    return axiosInstace.get(`${REQUEST_MAPPING}/search-suggestions?query=${query}`);
}

