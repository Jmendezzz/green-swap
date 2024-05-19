import styled from "styled-components";

const Textarea = styled.textarea`
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
    background-color: transparent;
    border: 1.6px solid var(--white);
    color: var(--white);
    &:focus{
        background-color: var(--primary-color);
    }
    background-color: var(--primary-color);
    color: var(--white);
    border: 1.6px solid var(--white);

`

export default Textarea;