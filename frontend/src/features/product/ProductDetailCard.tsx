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
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

interface Props {
  product: ProductDTO;
}

function ProductDetailCard({ product }: Props) {
  return (
    <StyledProductDetail>
      <StyledImageContainer>
        {product.urlImage === '' || product.urlImage == null ? (
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
            <Heading type="h3" align="left">
              Información del vendedor
            </Heading>
          </header>
          <div className="flex items-center gap-4">
            <UserProfilePicture user={product.owner} />
            <p>
              <Link to={`/${ROUTES.userProfile}/${product.owner.id}`}>
                {product.owner.firstName} {product.owner.lastName}
              </Link>
            </p>
          </div>
          <p>
            {formatDate(new Date(product.createdAt.toString()), 'MM/dd/yyyy')}
          </p>
        </div>

        <footer className="flex justify-end gap-10">
          <Button variant="secondary">Comprar</Button>
          <Link to={`${ROUTES.createExchange}/${product.id}`}>
            <Button variant="primary">Intercambiar</Button>
          </Link>
        </footer>
      </StyledProductDetailContent>
    </StyledProductDetail>
  );
}
const StyledImageContainer = styled.div`
  width: 300px;
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
  width: 100%;
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
  gap: 2rem;
  width: 100%;

  @media (min-width: ${Devices.tablet}) {
    width: 500px;
    height: 600px;
  }
`;

export default ProductDetailCard;
