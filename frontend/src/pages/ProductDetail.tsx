import styled from 'styled-components';
import { useProduct } from '../features/product/useProduct';
import Section from '../features/ui/Section';
import GoBackButton from '../features/ui/GoBackButton';
import Empty from '../features/ui/Empty';
import ProductDetailCard from '../features/product/ProductDetailCard';
import Spinner from '@/features/ui/Spinner';

function ProductDetail() {
  const { product, isLoading } = useProduct();

  if (isLoading) {
    return (
      <LoadingContainer>
        <Spinner color={'white'} size="xl" />
      </LoadingContainer>
    );
  }

  return (
    <StyledSection>
      {product && !isLoading ? (
        <>
          <GoBackButton />
          <ProductDetailCard product={product} />
        </>
      ) : (
        <Empty message="Producto no encontrado" />
      )}
    </StyledSection>
  );
}

const StyledSection = styled(Section)`
  background-color: var(--primary-color);
`;

const LoadingContainer = styled.div`
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export default ProductDetail;
