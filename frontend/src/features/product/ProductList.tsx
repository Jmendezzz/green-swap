import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';
import { ClipLoader } from 'react-spinners';

function ProductList() {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <StyledProductItemsContainer>
        <ClipLoader color="white" size={150} />
      </StyledProductItemsContainer>
    );
  }

  return (
    <StyledProductItemsContainer>
      {data?.content.map((product) => (
        <ProductItemCard key={product.id} product={product} />
      ))}
    </StyledProductItemsContainer>
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
