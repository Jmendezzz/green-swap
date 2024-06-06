import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import { MdSwapHoriz } from 'react-icons/md';
import styled from 'styled-components';
import UserProfilePicture from '../ui/UserProfilePicture';
import Row from '../ui/Row';
import { formatDate } from 'date-fns';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ExchangeFeedback from './ExchangeFeedback';

interface Props {
  exchange: ExchangeDTO;
}
function ExchangeDetailCardInfo({ exchange }: Props) {
  return (
    <Row type="vertical">
      <ExchangeContainer>
        <ProductCard>
          <div className="flex items-center gap-10">
            <UserProfilePicture user={exchange.productRequested.owner} />
            <p>{exchange.productRequested.owner.firstName}</p>
          </div>
          <ProductImage
            src={exchange.productRequested.urlImage}
            alt={exchange.productRequested.name}
          />
          <ProductName>{exchange.productRequested.name}</ProductName>
        </ProductCard>
        <MdSwapHoriz className="text-contrast text-[200px]" />
        <ProductCard>
          <div className="flex items-center gap-10">
            <UserProfilePicture user={exchange.productOffered.owner} />
            <p>{exchange.productOffered.owner.firstName}</p>
          </div>
          <ProductImage
            src={exchange.productOffered.urlImage}
            alt={exchange.productOffered.name}
          />
          <ProductName>{exchange.productOffered.name}</ProductName>
        </ProductCard>
      </ExchangeContainer>
      <StyledAditionalInfo>
        <p>Fecha de creación: {formatDate(exchange.createdAt, 'MM/dd/yyyy')}</p>
        <div className="flex w-full justify-end">
          <Modal>
            <Modal.Open opens='feedback'>
              <Button variant="primary">Califica tu intercambio</Button>
            </Modal.Open>
            <Modal.Window name='feedback'>
              <ExchangeFeedback />
            </Modal.Window>
          </Modal>
        </div>
      </StyledAditionalInfo>
    </Row>
  );
}

const ExchangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 2rem;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--primary-color-light);
  align-items: center;
  border-radius: 10px;
  width: 100%;
  padding: 2rem;
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

const StyledAditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem;
  border-radius: 1.4rem;
  gap: 2rem;
  background-color: var(--primary-color-light);
`;
export default ExchangeDetailCardInfo;
