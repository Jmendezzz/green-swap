import styled from "styled-components"

interface Props{
    variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button = styled.button<Props>`

    padding: 1.4rem;
    border-radius: 1rem;
    font-size: 2.3rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    text-align:center;
    
    
    ${(props:Props) => 
        props.variant === 'primary' && `
            background-color: var(--contrast-color);
            color: var(--primary-color);
            &:hover{
                background-color: #2bd66f;
            }
        `
    }
    
`

export default Button;
    