import { AxiosResponse } from 'axios';
import { axiosInstace } from './axiosConfig';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { Pageable, PageableResult } from '@/domain/pageable/Pageable';
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';

const REQUEST_MAPPING = '/user';

export function getUserProductsService(pageable:Pageable): Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/products?page=${pageable.page}&size=${pageable.size}`);
}

export function getUserByIdService(id: string): Promise<AxiosResponse<BasicInfoUserDTO>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/${id}`);
}
