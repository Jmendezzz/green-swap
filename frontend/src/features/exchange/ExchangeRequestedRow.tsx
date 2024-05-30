import { ExchangeDTO } from '@/domain/exchange/ExchangeDTO';
import Table from '../ui/Table';
import styled from 'styled-components';
import { Status } from '@/domain/exchange/Status';

interface Props {
  exchange: ExchangeDTO;
}
function ExchangeRequestedRow({ exchange }: Props) {
  return (
    <Table.Row>
      <StyledExchangeRequestedRowImage>
        <img
          src={exchange.productOffered.urlImage}
          alt={exchange.productOffered.name}
        />
        <p>{exchange.productOffered.name}</p>
      </StyledExchangeRequestedRowImage>
      <StyledExchangeRequestedRowImage>
        <img
          src={exchange.productRequested.urlImage}
          alt={exchange.productRequested.name}
        />
        <p>{exchange.productRequested.name}</p>
      </StyledExchangeRequestedRowImage>
      <div className='text-center'>{Status[exchange.status]}</div>
    </Table.Row>
  );
}

const StyledExchangeRequestedRowImage = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-direction: column;
  & img {
    width: 130px;
    height: 120px;
    border-radius: 2rem;
  }
`;

export default ExchangeRequestedRow;
