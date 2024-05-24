import { Devices } from '@/styles/Devices';
import styled from 'styled-components';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const Button = styled.button<Props>`
  padding: 1.4rem;
  border-radius: 1rem;
  font-size: 2.3rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  text-align: center;

  @media (max-width: ${Devices.tablet}) {
    font-size: 1.8rem;
  }

  &:disabled {
    background-color: #abbea5;
    cursor: not-allowed;
  }

  &:disabled:hover {
    background-color: #abbea5;
    cursor: not-allowed;
  }

  ${(props: Props) => {
    if (props.size === 'small') {
      return `
                padding: 1rem;
                font-size: 1.6rem;
            `;
    }
    if (props.size === 'medium') {
      return `
                padding: 1.4rem;
                font-size: 2.3rem;
            `;
    }
    if (props.size === 'large') {
      return `
                padding: 1.8rem;
                font-size: 3rem;
            `;
    }
  }}

  ${(props: Props) =>
    props.variant === 'primary' &&
    `
            background-color: var(--contrast-color);
            color: var(--primary-color);
            &:hover{
                background-color: #2bd66f;
            }
        `}

        ${(props: Props) =>
    props.variant === 'secondary' &&
    `
            background-color: transparent;
            color: var(--contrast-color);
            border: 2px solid var(--contrast-color);
            &:hover{
                background-color: #2bd66f;
                color: var(--primary-color);
            }
        `}
    
            ${(props: Props) =>
    props.variant === 'tertiary' &&
    `
            background-color:var(--primary-color) ;
                color: var(--contrast-color);
                &:hover{
                    background-color:(--primary-color) ;
                    color: var(--contrast-color);
                }
            `}
`;

export default Button;
