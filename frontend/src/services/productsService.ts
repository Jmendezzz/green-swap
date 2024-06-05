import { SearchCriteriaProductDTO } from '@/domain/product/SearchCriteriaProductDTO';
import { axiosInstace } from './axiosConfig';
import { Pageable, PageableResult } from '@/domain/pageable/Pageable';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { AxiosResponse } from 'axios';
import { ProductDTO } from '@/domain/product/ProductDTO';
import { CreateProductDTO } from '@/domain/product/CreateProductDTO';

const REQUEST_MAPPING = '/products';

export function getProductsByCriteriaService(
  searchCriteria: SearchCriteriaProductDTO,
  pageable: Pageable
): Promise<AxiosResponse<PageableResult<ListProductDTO>>> {
  return axiosInstace.post(
    `${REQUEST_MAPPING}/search?page=${pageable.page}&size=${pageable.size}`,
    searchCriteria
  );
}

export function getProductByIdService(
  productId: number
): Promise<AxiosResponse<ProductDTO>> {
  return axiosInstace.get(`${REQUEST_MAPPING}/${productId}`);
}

export function getProductsSuggestions(
  query: string
): Promise<AxiosResponse<Array<string>>> {
  return axiosInstace.get(
    `${REQUEST_MAPPING}/search-suggestions?query=${query}`
  );
}

export function createProductService(
  product: CreateProductDTO
): Promise<AxiosResponse<ProductDTO>> {
  const formData = new FormData();
  formData.append(
    'productInfo',
    new Blob(
      [
        JSON.stringify({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category,
          quality: product.quality,
          status: product.status,
        }),
      ],
      { type: 'application/json' }
    )
  );
  if (product.productImage) {
    formData.append('productImage', product.productImage);
  }

  return axiosInstace.post(`${REQUEST_MAPPING}/create`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}


export function getUserProductsByIdService(userId: string, pageable: Pageable): Promise<AxiosResponse<PageableResult<ListProductDTO>>>  {
  return axiosInstace.get(`${REQUEST_MAPPING}/user/${userId}?page=${pageable.page}&size=${pageable.size}`);
}
