import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${props => props.theme.colors.gray[600]};
        width: 90rem; 
        font-family: "Inter", sans-serif;
    }


`