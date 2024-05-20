import styled from 'styled-components';
import { useProduct } from './useProduct';
import Section from '../ui/Section';
import { ClipLoader } from 'react-spinners';
import GoBackButton from '../ui/GoBackButton';
import Empty from '../ui/Empty';
import ProductDetailCard from './ProductDetailCard';

function ProductDetail() {
  const { product, isLoading } = useProduct();

  if(isLoading){
    return <LoadingContainer>
    <ClipLoader color={'white'} size={150} />
    </LoadingContainer>
  }

  return (
    <StyledSection>

      {product && !isLoading ? (
        <>
          <GoBackButton />
          <ProductDetailCard product={product} />
        </>
      ) : 
      <Empty message='Producto no encontrado' />}
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
