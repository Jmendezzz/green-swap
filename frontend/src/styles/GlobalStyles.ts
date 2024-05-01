import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        --primary-color: #1B232E;
        --contrast-color: #1AC760;
        --white: rgb(226 232 240);
        --red: rgb(185 28 28);
        font-family: "Space Grotesk", sans-serif;
 
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
 
`;

export default GlobalStyles;
