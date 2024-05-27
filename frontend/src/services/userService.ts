import { AxiosResponse } from 'axios';
import { axiosInstace } from './axiosConfig';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { Pageable, PageableResult } from '@/domain/pageable/Pageable';

const REQUEST_MAPPING = '/user';

export function getUserProductsService(pageable:Pageable): Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/products?page=${pageable.page}&size=${pageable.size}`);
}
