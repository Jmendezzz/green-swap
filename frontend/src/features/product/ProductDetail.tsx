import styled from 'styled-components';
import { useProduct } from './useProduct';
import Section from '../ui/Section';
import { ClipLoader } from 'react-spinners';
import Heading from '../ui/Heading';
import { Quality } from '@/domain/product/Condition';
import Button from '../ui/Button';
import GoBackButton from '../ui/GoBackButton';
import { Devices } from '@/styles/Devices';
import { HiPhotograph } from 'react-icons/hi';
import Empty from '../ui/Empty';

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

          <StyledProductDetail>
            <StyledImageContainer>
              {product.urlImage === '' ?  
              <HiPhotograph className='w-full h-full' />: (
              <img src={product.urlImage} alt={product.name} />

              )}
            </StyledImageContainer>

            <StyledProductDetailContent>
                <Heading align='left' >{product.name}</Heading>
                <p>
                  <span className="font-bold">Estado:</span>{' '}
                  {Quality[product.quality]}
                </p>
                <p>{product.description}</p>
                <p>$ {product.price}</p>
              <footer className="flex justify-end gap-10">
                <Button variant="secondary">Comprar</Button>
                <Button variant="primary">Intercambiar</Button>
              </footer>
            </StyledProductDetailContent>
          </StyledProductDetail>
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


const StyledImageContainer = styled.div`
  width: 100%;
  height:100%;
  @media (min-width: ${Devices.tablet}) {
    width: 50%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3rem;
  }
`;

const StyledProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  @media (min-width: ${Devices.tablet}) {
    flex-direction: row;
    gap: 2rem;
  }
  `

  const StyledProductDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3rem;

  @media (min-width: ${Devices.tablet}) {
    justify-content: space-between;
  }
  
  `
export default ProductDetail;