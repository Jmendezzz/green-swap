import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import { ClipLoader } from 'react-spinners';
import ProductFilter from './ProductFilter';

function ProductList() {
  const { data, isLoading } = useProducts();

  return (
    <>
      <div className="flex">
        <ProductFilter />
        <StyledProductItemsContainer>
          {isLoading && (
            <div className="flex w-full h-full items-center justify-center">
              <ClipLoader color={'white'} loading={isLoading} size={150} />
            </div>
          )}
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  width: 100%;
  min-height: 100vh;
`;

export default ProductList;
