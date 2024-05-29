import ListCreateExchangeUserProducts from '@/features/exchange/ListCreateExchangeUserProducts';
import CreateProductForm from '@/features/product/CreateProductForm';
import { useProduct } from '@/features/product/useProduct';
import Heading from '@/features/ui/Heading';
import Section from '@/features/ui/Section';
import Spinner from '@/features/ui/Spinner';
import Tabs from '@/features/ui/Tabs';
import { FaExchangeAlt } from 'react-icons/fa';
import { HiPhoto } from 'react-icons/hi2';
import styled from 'styled-components';

const selectProductTabs = [
  {
    id: 'createProduct',
    name: 'Crear producto',
    content: <CreateProductForm showPreview={false} />,
  },
  {
    id: 'myProducts',
    name: 'Mis productos',
    content: <ListCreateExchangeUserProducts />,
  },
];

function CreateExchange() {
  const { isLoading, product: productToExchange } = useProduct();

  if (isLoading) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-primary">
        <Spinner color="white" />
      </div>
    );
  }

  if (!productToExchange) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-primary">
        <Heading>No se encontró el producto</Heading>
      </div>
    );
  }

  return (
    <StyledCreateExchangeSection>
      <div className="flex flex-col gap-20">
        <Heading type="h2">
          Intercambiar{' '}
          <span className="text-contrast">{productToExchange?.name}</span>
        </Heading>
        <StyledExchangeContainer>
          <StyledProductToExchange>
            {productToExchange.urlImage != null &&
            productToExchange.urlImage !== '' ? (
              <img
                src={productToExchange.urlImage}
                alt={productToExchange.name}
                className="w-[100px] h-[200px]"
              />
            ) : (
              <HiPhoto className="w-1/2 h-1/2" />
            )}
            <Heading type="h2">{productToExchange.name}</Heading>
          </StyledProductToExchange>

          <div className="flex items-center">
            <FaExchangeAlt size={80} className="exchange-icon text-contrast" />
          </div>

          <div className="w-full h-full flex flex-col justify-center">
            <Heading type="h3">
              Selecciona un producto para intercambiar
            </Heading>
            <div className="h-full">
              <Tabs tabs={selectProductTabs} />
            </div>
          </div>
        </StyledExchangeContainer>
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
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
`;

const StyledProductToExchange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  & > img {
    object-fit: cover;
    width: 100%;
    min-height: 400px;
    border-radius: 2rem;
  }
`;

export default CreateExchange;
