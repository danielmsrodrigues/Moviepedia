import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: ${(props) => props.theme.colors.background.primary};
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text.primary}
    font-family: sans-serif;
}
`;
