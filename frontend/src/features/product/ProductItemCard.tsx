import { Category } from '@/domain/product/Category';
import { Quality } from '@/domain/product/Condition';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { Devices } from '@/styles/Devices';
import { HiPhotograph } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function ProductItemCard({ product }: { product: ListProductDTO }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${product.id}`);
  };
  return (
    <StyledProductItemCard className="shadow-lg" onClick={clickHandler}>
      <StyledProductImage>
        {product.urlImage != '' ? (
          <img
            src={product.urlImage}
            alt={product.name}
            className="w-full h-full"
          />
        ) : (
          <HiPhotograph className="w-full h-full" />
        )}
      </StyledProductImage>
      <div className='text-center'>
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <p>{Category[product.category]}</p>
        <p>{Quality[product.quality]}</p>
      </div>
    </StyledProductItemCard>
  );
}
const StyledProductItemCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--primary-color-light);
  border-radius: 1rem;
  cursor: pointer;
  gap: 1rem;
  max-height: 50%;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  p {
    margin: 0.5rem 0;
  }
  width: 200px;
  @media (min-width: ${Devices.tablet}) {
    width: 300px;
  }
`;

const StyledProductImage = styled.div`
  width: 100%;
  min-height: 200px;
  border-radius: 1rem;
  max-height: 300px;
  & > img {
    border-radius: 1rem 1rem 0 0;
  }
  @media (min-width: ${Devices.tablet}) {
    min-height: 300px;
  }
`;
export default ProductItemCard;
