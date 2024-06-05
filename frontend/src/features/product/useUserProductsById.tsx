import { Pageable } from "@/domain/pageable/Pageable";
import { getUserProductsByIdService } from "@/services/productsService";
import {  useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function useUserProductsById() {
    const { userId } = useParams();
    if(!userId) throw new Error('userId is required');
    const [pageable, setPageable] = useState<Pageable>({ page: 0, size: 20 });

    const {data:products, status} = useQuery({
        queryKey: ['userProducts', userId],
        queryFn: () => getUserProductsByIdService(userId,pageable)
    })



  return {
    data: products?.data,
    isLoading : status === 'loading',
    pageable,
    setPageable
  }
}

export default useUserProductsById;