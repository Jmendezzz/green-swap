import styled from "styled-components";
interface Props{
    variant?: 'filled' | 'outlined'
}

const Input = styled.input<Props>`
    padding: 0.6rem 2.5rem;
    border-radius: 1rem;
    font-size: 1.6rem;

    transition: all 0.3s ease;
    border: none;
    margin: 0.5rem;
    width: 100%;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: var(--white);

    }
    ${(props:Props) => 
        props.variant === 'outlined' && `
            background-color: transparent;
            border: 1.6px solid var(--white);
            color: var(--white);
            &:focus{
                background-color: var(--primary-color);
            }
        `
    }
    ${(props:Props) => 
        props.variant === 'filled' && `
            background-color: var(--primary-color);
            color: var(--white);
            border: 1.6px solid var(--white);
        `
    }
`
export default Input;