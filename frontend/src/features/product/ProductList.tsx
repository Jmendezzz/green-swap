import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import { ClipLoader } from 'react-spinners';
import ProductFilter from './ProductFilter';
import Empty from '../ui/Empty';

function ProductList() {
  const { data, isLoading } = useProducts();

  return (
    <div className="flex gap-10">
      <ProductFilter />
      <StyledProductItemsContainer>
        {isLoading ? (
          <div className="flex w-full h-full items-center justify-center">
            <ClipLoader color={'white'} size={150} />
          </div>
        ) : (
          <>
            {data && data.content.length > 0 ? (
              data.content.map((product) => (
                <ProductItemCard key={product.id} product={product} />
              ))
            ) : (
              <Empty message="No hay productos encontrados" />
            )}
          </>
        )}
      </StyledProductItemsContainer>
    </div>
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
