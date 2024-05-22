import { ProductDTO } from '@/domain/product/ProductDTO';
import { Devices } from '@/styles/Devices';
import { HiPhotograph } from 'react-icons/hi';
import styled from 'styled-components';
import Heading from '../ui/Heading';
import Button from '../ui/Button';
import { getQualityValue } from '@/domain/product/Condition';
import { formatDate } from 'date-fns';
import UserProfilePicture from '../ui/UserProfilePicture';
import { formatToCOP } from '@/utils/formatCurrency';

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
          <p>{formatToCOP(product.price) || 'No especificado.'}</p>
          <hr />
          <div>
            <header>
              <Heading type="h3" align='left'>Información del vendedor</Heading>
            </header>
            <div className="flex items-center gap-4">
              <UserProfilePicture user={product.owner} />
              <p>
                {product.owner.firstName} {product.owner.lastName}
              </p>
            </div>
            <p>{formatDate(new Date(product.createdAt.toString()), 'MM/dd/yyyy')}</p>
          </div>
          
          <footer className="flex justify-end gap-10">
            <Button variant="secondary">Comprar</Button>
            <Button variant="primary">Intercambiar</Button>
          </footer>
        </StyledProductDetailContent>
      </StyledProductDetail>
    );
  }
const StyledImageContainer = styled.div`
  width: 500px;
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
  justify-content: center;
  align-items: center;
  max-height: 800px;
  padding: 2rem;
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
  width: 500px;
  height: 600px;
`;

export default ProductDetailCard;
