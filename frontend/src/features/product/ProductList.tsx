import styled from 'styled-components';
import ProductItemCard from './ProductItemCard';
import { useProducts } from './useProducts';

function ProductList() {
  const { data } = useProducts();

  return (
    <StyledProductItemsContainer>
      {data?.content.map((product) => (
        <ProductItemCard key={product.id} product={product} />
      ))}
    </StyledProductItemsContainer>
  )
}
const StyledProductItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  `
export default ProductList;
