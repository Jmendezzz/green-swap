import { AxiosResponse } from 'axios';
import { axiosInstace } from './axiosConfig';
import { List } from 'postcss/lib/list';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { PageableResult } from '@/domain/pageable/Pageable';

const REQUEST_MAPPING = '/user';

export function getUserProductsService(): Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/products`);
}
