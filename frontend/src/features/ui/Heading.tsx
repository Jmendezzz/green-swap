import { Devices } from '@/styles/Devices';
import styled, { css } from 'styled-components';

interface Props {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
}

const Heading = styled.h1<Props>`
  ${(props: Props) =>
    props.type === 'h1' &&
    css`
      font-size: 5rem;
      font-weight: 1000;
      @media (max-width: ${Devices.tablet}) {
        font-size: 3rem;
      }
      @media (max-width: ${Devices.mobile}) {
        font-size: 2.5rem;
      }
    `}

  ${(props: Props) =>
    props.type === 'h2' &&
    css`
      font-size: 3.5rem;
      font-weight: 700;
      @media (max-width: ${Devices.tablet}) {
        font-size: 1.8rem;
      }
      @media (max-width: ${Devices.mobile}) {
        font-size: 1.6rem;
      }
    `}

  ${(props: Props) =>
    props.type === 'h3' &&
    css`
      font-size: 1.7rem;
      font-weight: 600;
    `}

    ${(props: Props) =>
    props.type === 'h4' &&
    css`
      font-size: 1.4rem;
    `}
  width: 100%;

  text-align: ${(props) => props.align};
`;
Heading.defaultProps = {
  type: 'h1',
  align: 'center',
};
export default Heading;
