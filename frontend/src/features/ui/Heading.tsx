import styled, { css } from 'styled-components';

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}


const Heading = styled.h1<Props>`
  ${(props:Props) =>
    props.type === 'h1' &&
    css`
      font-size: 4rem;
    `}

  ${(props:Props) =>
    props.type === 'h2' &&
    css`
      font-size: 2rem;
    `}

  ${(props:Props) =>
    props.type === 'h3' &&
    css`
      font-size: 2rem;
    `}

    ${(props:Props) =>
    props.type === 'h4' &&
    css`
      font-size: 1.4rem;
      text-align: center;
    `}

  font-weight:600;
`;

export default Heading;