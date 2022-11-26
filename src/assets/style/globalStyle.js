import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing:border-box;
        font-family: "Athiti", sans-serif;
        color: white;
    }
    body{
        background-color: ${({ theme }) => theme.colors.bg};
        overflow-x: hidden;
    }
`;
