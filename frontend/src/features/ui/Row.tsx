import styled,{css} from 'styled-components';

interface Props {
  type: 'vertical' | 'horizontal';
}
const Row = styled.div<Props>`
  display: flex;
  ${(props:Props) => props.type === 'horizontal' && css`
    justify-content:space-between;
    align-items:center;
  `}
  ${(props:Props) => props.type === 'vertical' && css`
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:1.6rem;
  `}
`;

export default Row;