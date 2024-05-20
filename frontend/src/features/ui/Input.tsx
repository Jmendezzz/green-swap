import { useEffect, useRef } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
interface Props{
    variant?: 'filled' | 'outlined',
    type?: string,
    placeholder?: string,
    register?: UseFormRegisterReturn
}



// function Input({variant = 'outlined', type, placeholder} : Props ){
//     const inputRef = useRef<HTMLInputElement>(null);

//     useEffect(() => {
//         const handleFocus = () => {
//             inputRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'});
//         }

//         inputRef.current?.addEventListener('focus', handleFocus);

//         return () => {
//             inputRef.current?.removeEventListener('focus', handleFocus);
//         }
//     },[])

//     return (
//         <StyledInput type={type} placeholder={placeholder} ref={inputRef} variant={variant} />
//     )
// }

const Input = styled.input<Props>`
    padding: 0.8rem 2.5rem;
    border-radius: 1rem;
    font-size: 1.6rem;

    transition: all 0.3s ease;
    border: none;
    width: 100%;
    &:focus{
        outline: none;
    }
    &::placeholder{
        color: var(--dark-white);

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
        `
    }
`

export default Input;