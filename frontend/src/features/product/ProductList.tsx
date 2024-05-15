import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import { ClipLoader } from 'react-spinners';
import { SearchCriteriaProductDTO } from '@/domain/product/SearchCriteriaProductDTO';
import ProductFilter from './ProductFilter';

function ProductList() {
  const { data, isLoading, setSearhCriteria, setPageable } = useProducts();

  function handleSearch(criteriaSearch: Partial<SearchCriteriaProductDTO>) {
    setSearhCriteria((prev) => ({ ...prev, ...criteriaSearch }));
  }

  if (isLoading) {
    return (
      <StyledProductItemsContainer>
        <ClipLoader color="white" size={150} />
      </StyledProductItemsContainer>
    );
  }

  return (
    <>
      <div className='flex'>
        <ProductFilter setFilter={handleSearch} />
        <StyledProductItemsContainer>
          {data?.content.map((product) => (
            <ProductItemCard key={product.id} product={product} />
          ))}
        </StyledProductItemsContainer>
      </div>
    </>
  );
}
const StyledProductItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  min-height: 100vh;
`;

export default ProductList;
