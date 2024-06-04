import { FaCoins } from 'react-icons/fa';
import styled from 'styled-components';

interface Props {
  coins: number;
}

const CoinContainer = styled.div`
  display: flex;
  align-items: center;
  color: var(--contrast-color);
`;

const CoinIcon = styled(FaCoins)`
  margin-right: 0.5rem;
  font-size: 2rem;
`;

function Coins({ coins }: Props) {
  return (
    <CoinContainer>
      <CoinIcon />
      {coins}
    </CoinContainer>
  );
}

export default Coins