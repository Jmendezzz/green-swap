import { createGlobalStyle } from 'styled-components';
import { Devices } from './Devices';

const GlobalStyles = createGlobalStyle`
    *{
        --primary-color: #1B232E;
        --primary-color-light: #202a37;
        --contrast-color: #1AC760;
        --contrast-color-dark: rgba(26, 199, 96, 0.1); // Change this line
        --white: #ffffff;
        --dark-white: rgb(209 213 219);
        --red: rgb(255, 51, 51);
        font-family: "Space Grotesk", sans-serif;
 
    }
        /* Custom scrollbar */
        *::-webkit-scrollbar {
        width: 10px;
    }

    *::-webkit-scrollbar-track {
        background: var(--primary-color-light);
    }

    *::-webkit-scrollbar-thumb {
        background-color: var(--contrast-color);
        border-radius: 20px;
        border: 3px solid var(--primary-color-light);
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    ul {
    list-style: none;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 { 
    overflow-wrap: break-word;
    hyphens: auto;
    color: var(--white);
    font-family: "Space Grotesk", sans-serif;
    }

    p{
        font-size: 2rem;
        @media (max-width: ${Devices.tablet}){
            font-size: 1.6rem;
        }
        @media (max-width: ${Devices.mobile}){
            font-size: 1.4rem;
        }
    }
`;

export default GlobalStyles;
