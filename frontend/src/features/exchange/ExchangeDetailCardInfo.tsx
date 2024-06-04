import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import { MdSwapVert } from 'react-icons/md';
import styled from 'styled-components';
import UserProfilePicture from '../ui/UserProfilePicture';

interface Props {
  exchange: ExchangeDTO;
}
function ExchangeDetailCardInfo({ exchange }: Props) {
  return (
    <ExchangeContainer>
      <ProductCard>
        <div className='flex items-center gap-10'>
            <UserProfilePicture
            user={exchange.productRequested.owner}
            />
            <p>{exchange.productRequested.owner.firstName}</p>
        </div>
        <ProductImage
          src={exchange.productRequested.urlImage}
          alt={exchange.productRequested.name}
        />
        <ProductName>{exchange.productRequested.name}</ProductName>
      </ProductCard>
      <MdSwapVert size={80} className="text-contrast" />
      <ProductCard>
        <div className='flex items-center gap-10'>
            <UserProfilePicture
            user={exchange.productOffered.owner}
            />
            <p>{exchange.productOffered.owner.firstName}</p>
        </div>
        <ProductImage
          src={exchange.productOffered.urlImage}
          alt={exchange.productOffered.name}
        />
        <ProductName>{exchange.productOffered.name}</ProductName>
      </ProductCard>
    </ExchangeContainer>
  );
}

const ExchangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width:100%;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: contain;
`;

const ProductName = styled.p`
  margin-top: 1rem;
  font-weight: 800;
  font-size: 2rem;
`;
export default ExchangeDetailCardInfo;
