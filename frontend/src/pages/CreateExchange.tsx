import { useUserContext } from '@/context/UserContext';
import { ProductDTO } from '@/domain/product/ProductDTO';
import ProductToExchangeCard from '@/features/exchange/ProductToExchangeCard';
import SelectOfferedProduct from '@/features/exchange/SelectOfferedProduct';
import useCreateExchange from '@/features/exchange/useCreateExchange';
import { useProduct } from '@/features/product/useProduct';
import Button from '@/features/ui/Button';
import GoBackButton from '@/features/ui/GoBackButton';
import Heading from '@/features/ui/Heading';
import Section from '@/features/ui/Section';
import Spinner from '@/features/ui/Spinner';
import { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import styled from 'styled-components';

function CreateExchange() {
  const { isLoading:isLoadingProduct, product: productRequested } = useProduct();
  const [productOffered, setProductOffered] = useState<ProductDTO | null>(null);
  const {createExchange,isLoading} = useCreateExchange();
  const {user} = useUserContext();

  if(!user) return null;

  const handleProductOffered = (product: ProductDTO) => {
    setProductOffered({
      ...product,
      owner: user
    });
  };

  if (isLoadingProduct) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-primary">
        <Spinner color="white" />
      </div>
    );
  }

  if (!productRequested) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-primary">
        <Heading>No se encontró el producto</Heading>
      </div>
    );
  }

  const handleCreateExchange = () => {
    if(!productOffered) return;
    createExchange({
      productOffered,
      productRequested
    });
  }

  return (
    <StyledCreateExchangeSection>
      <GoBackButton />
      <div className="flex flex-col gap-20">
        <Heading type="h2">
          Intercambiar{' '}
          <span className="text-contrast">{productRequested?.name}</span>
        </Heading>
        <StyledExchangeContainer>
          <ProductToExchangeCard product={productRequested} />
          <div className="flex items-center">
            <FaExchangeAlt size={80} className="exchange-icon text-contrast" />
          </div>

          <>
            {productOffered ? (
              <ProductToExchangeCard product={productOffered} />
            ) : (
              <SelectOfferedProduct
                productOfferedHandler={handleProductOffered}
              />
            )}
          </>
        </StyledExchangeContainer>

        <div className=" flex justify-center">
          <Button variant="primary" disabled={!productOffered} onClick={handleCreateExchange}>
            {
              isLoading ? <Spinner color="white" /> : 'Intercambiar'
            }
          </Button>
        </div>
      </div>
    </StyledCreateExchangeSection>
  );
}

const StyledCreateExchangeSection = styled(Section)`
  background-color: var(--primary-color);
`;

const StyledExchangeContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  min-height: 500px;
`;

export default CreateExchange;
