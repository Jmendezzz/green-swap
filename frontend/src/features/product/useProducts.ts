import { useProductFilterContext } from "@/context/ProductFilterContext";
import { Pageable } from "@/domain/pageable/Pageable";
import { getProductsByCriteriaService } from "@/services/productsService";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";


export function useProducts(){
    const queryClient = useQueryClient();

    const {setFilter,searchCriteriaProductDTO} = useProductFilterContext();
    const [pageable, setPageable] = useState<Pageable>({page: 1, size: 20});

    const {data: queryData, error, isLoading} = useQuery({
        queryKey: ['products', searchCriteriaProductDTO, pageable],
        queryFn: () => getProductsByCriteriaService(searchCriteriaProductDTO, pageable),
    })

    const data = queryData?.data;

    // Prefetching
    const hasMorePages = data ? data.totalPages > pageable.page : false; 


    if(hasMorePages){
        queryClient.prefetchQuery({
            queryKey: ['products', searchCriteriaProductDTO, pageable.page + 1],
            queryFn: () => getProductsByCriteriaService(searchCriteriaProductDTO, {...pageable, page: pageable.page + 1}),
        })
    }

    if(pageable.page > 1){
        queryClient.prefetchQuery({
            queryKey: ['products', searchCriteriaProductDTO, {...pageable, page: pageable.page - 1}],
            queryFn: () => getProductsByCriteriaService(searchCriteriaProductDTO, {...pageable, page: pageable.page - 1}),
        })
    }
    return {
        data,
        error,
        isLoading,
        setPageable,
    }
}