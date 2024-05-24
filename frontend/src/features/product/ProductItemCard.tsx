import {getCategoryValue } from '@/domain/product/Category';
import { ListProductDTO } from '@/domain/product/ListProductDTO';
import { Devices } from '@/styles/Devices';
import { formatToCOP } from '@/utils/formatCurrency';
import { HiPhotograph } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductQualityTag from './ProductQualityTag';

function ProductItemCard({ product }: { product: ListProductDTO }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${product.id}`);
  };
  return (
    <StyledProductItemCard className="shadow-lg relative" onClick={clickHandler}>
      <StyledProductImage>
        {product.urlImage != '' && product.urlImage != null ? (
          <img
            src={product.urlImage}
            alt={product.name}
            className="w-full h-full"
          />
        ) : (
          <HiPhotograph className="w-full h-full" />
        )}
      </StyledProductImage>
      <div className='text-center h-[100px]'>
        <h2>{product.name}</h2>
        <p>{formatToCOP(product.price)}</p>
        <p>{getCategoryValue(product.category)}</p>
        <ProductQualityTag quality={product.quality}/>
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
  height: fit-content;
  padding-bottom: 0.5rem;
  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }
  p {
    margin: 0.5rem 0;
  }
  width: 150px;
  @media (min-width: ${Devices.tablet}) {
    width: 300px;
    & h2{
      font-size: 2rem;
    }
  }
`;

const StyledProductImage = styled.div`
  width: 100%;
  border-radius: 1rem;
  height: 100px;
  & > img {
    border-radius: 1rem 1rem 0 0;
    object-fit: cover;
  }
  @media (min-width: ${Devices.tablet}) {
    height: 300px;
  }
`;
export default ProductItemCard;
