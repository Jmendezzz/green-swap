import { AxiosResponse } from 'axios';
import { axiosInstace } from './axiosConfig';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { Pageable, PageableResult } from '@/domain/pageable/Pageable';
import { BasicInfoUserDTO } from '@/domain/user/BasicInfoUserDTO';
import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import { NotificationDTO } from '@/domain/notification/NotificationDTO';

const REQUEST_MAPPING = '/user';

export function getUserProductsService(pageable:Pageable): Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/products?page=${pageable.page}&size=${pageable.size}`);
}

export function getUserByIdService(id: string): Promise<AxiosResponse<BasicInfoUserDTO | null>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/${id}`);
}

export function getUserExchangesOffers(pageable: Pageable): Promise<AxiosResponse<PageableResult<ExchangeDTO>>>{
  return axiosInstace.get(`${REQUEST_MAPPING}/exchanges/offers?page=${pageable.page}&size=${pageable.size}`);
}

export function getUserExchangesRequested(pageable: Pageable): Promise<AxiosResponse<PageableResult<ExchangeDTO>>>{
  return axiosInstace.get(`${REQUEST_MAPPING}/exchanges/requested?page=${pageable.page}&size=${pageable.size}`);
}

export function getUserNotificationsService(): Promise<AxiosResponse<NotificationDTO[]>>{
  return axiosInstace.get(`${REQUEST_MAPPING}/notifications`);
}
