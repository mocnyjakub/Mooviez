import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    background-color:#fff;
  }
  
  a, button {
    font-family: 'Poppins', sans-serif;
  }
  h1,h2,h3,h4,p{
    margin:0;
  }
`;

export default GlobalStyle;
