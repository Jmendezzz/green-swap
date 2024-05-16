import { SearchCriteriaProductDTO } from '@/domain/product/SearchCriteriaProductDTO';
import { createContext, useContext, useState } from 'react';

interface ProductFilterContextState {
  searchCriteriaProductDTO: Partial<SearchCriteriaProductDTO>;
  setFilter: (
    searchCriteriaProductDTO: Partial<SearchCriteriaProductDTO>
  ) => void;
}

const ProductFilterContext = createContext<ProductFilterContextState | undefined>(undefined);

export function ProductFilterContextProvider({
  children,
}: {
  children: React.ReactNode | React.ReactNode[];
}) {
  const [searchCriteriaProductDTO, setSearchCriteriaProductDTO] = useState<
    Partial<SearchCriteriaProductDTO>
  >({});
  const setFilter = (
    searchCriteriaProductDTO: Partial<SearchCriteriaProductDTO>
  ) => {
    setSearchCriteriaProductDTO((prev) => {
      return {
        ...prev,
        ...searchCriteriaProductDTO,
      };
    });
  };
  return (
    <ProductFilterContext.Provider
      value={{ searchCriteriaProductDTO, setFilter }}
    >
      {children}
    </ProductFilterContext.Provider>
  );
}


export function useProductFilterContext() {
  const context = useContext(ProductFilterContext);
  if (context === undefined) {
    throw new Error(
      'useProductFilterContext must be used within a ProductFilterContextProvider'
    );
  }
  return context;
}