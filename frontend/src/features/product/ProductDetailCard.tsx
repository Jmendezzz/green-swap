import { ProductDTO } from '@/domain/product/ProductDTO';
import { Devices } from '@/styles/Devices';
import { HiPhotograph } from 'react-icons/hi';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import { getQualityValue } from '@/domain/product/Condition';
import { formatDate } from 'date-fns';
import UserProfilePicture from '../ui/UserProfilePicture';

interface Props {
    product: ProductDTO;
  }
  
function ProductDetailCard({ product }: Props) {
    return (
      <StyledProductDetail>
        <StyledImageContainer>
          {product.urlImage === '' ? (
            <HiPhotograph className="w-full h-full" />
          ) : (
            <img src={product.urlImage} alt={product.name} />
          )}
        </StyledImageContainer>
  
        <StyledProductDetailContent>
          <Heading align="left">{product.name || 'Titulo'}</Heading>
          <p>
            <span className="font-bold">Estado:</span>{' '}
            {getQualityValue(product.quality) || 'No especificado'}
          </p>
          <p>{product.description || 'Descripición.'}</p>
          <p>$ {product.price || 'No especificado.'}</p>
          <footer className="flex justify-end gap-10">
            <Button variant="secondary">Comprar</Button>
            <Button variant="primary">Intercambiar</Button>
          </footer>
          <div className="space-y-10">
            <header>Publicado por:</header>
            <div className="flex items-center gap-10">
              <UserProfilePicture user={product.owner} />
              <p>
                {product.owner.firstName} {product.owner.lastName}
              </p>
            </div>
            <p>{formatDate(new Date(product.createdAt.toString()), 'MM/dd/yyyy')}</p>
          </div>
        </StyledProductDetailContent>
      </StyledProductDetail>
    );
  }
const StyledImageContainer = styled.div`
  width: 100%;
  height: 100%;
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
  justify-content: space-around;
  align-items: center;
  height: 80%;
  @media (min-width: ${Devices.tablet}) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const StyledProductDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  gap: 3rem;
  max-width: 500px;

  @media (min-width: ${Devices.tablet}) {
    justify-content: space-between;
  }
`;

export default ProductDetailCard;
