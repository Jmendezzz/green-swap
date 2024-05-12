import { Pageable } from "@/domain/pageable/Pageable";
import { SearchCriteriaProductDTO } from "@/domain/product/SearchCriteriaProductDTO";
import { getProductsByCriteriaService } from "@/services/productsService";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";


export function useProducts(){
    const queryClient = useQueryClient();

    const [searchCriteria, setSearhCriteria] = useState<SearchCriteriaProductDTO>({});

    const [pageable, setPageable] = useState<Pageable>({page: 1, size: 20});

    const {data: queryData, error, isLoading} = useQuery({
        queryKey: ['products', searchCriteria, pageable],
        queryFn: () => getProductsByCriteriaService(searchCriteria, pageable),
    })

    const data = queryData?.data;

    // Prefetching
    const hasMorePages = data ? data.totalPages > pageable.page : false; 


    if(hasMorePages){
        queryClient.prefetchQuery({
            queryKey: ['products', searchCriteria, pageable.page + 1],
            queryFn: () => getProductsByCriteriaService(searchCriteria, {...pageable, page: pageable.page + 1}),
        })
    }

    if(pageable.page > 1){
        queryClient.prefetchQuery({
            queryKey: ['products', searchCriteria, {...pageable, page: pageable.page - 1}],
            queryFn: () => getProductsByCriteriaService(searchCriteria, {...pageable, page: pageable.page - 1}),
        })
    }
    return {
        data,
        error,
        isLoading,
        setSearhCriteria,
        setPageable,
    }
}