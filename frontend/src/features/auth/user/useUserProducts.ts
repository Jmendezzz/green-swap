import { getUserProductsService } from '@/services/userService';
import { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

export function useUserProducts() {
  const queryClient = useQueryClient();
  const [pageable, setPageable] = useState({ page: 0, size: 20 });

  useEffect(() => {
    setPageable({ page: 0, size: 20 });
  }, []);

  const queryKey = ['userProducts', pageable];

  const { data: queryData, error, status } = useQuery({
    queryKey,
    queryFn: () => getUserProductsService(pageable),
    retry: 1,
  });

  const data = queryData?.data;

  // Prefetching logic
  const hasMorePages = data ? data.totalPages > pageable.page : false;

  if (hasMorePages) {
    queryClient.prefetchQuery({
      queryKey: ['userProducts', { ...pageable, page: pageable.page + 1 }],
      queryFn: () => getUserProductsService({ ...pageable, page: pageable.page + 1 }),
    });
  }

  if (pageable.page > 0) {
    queryClient.prefetchQuery({
      queryKey: ['userProducts', { ...pageable, page: pageable.page - 1 }],
      queryFn: () => getUserProductsService({ ...pageable, page: pageable.page - 1 }),
    });
  }

  return {
    isLoading: status === 'loading',
    data,
    error,
    pageable,
    setPageable,
  };
}
