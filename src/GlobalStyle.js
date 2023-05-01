import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}

body {
  background-color: #407fff30;;
  font-family: 'Open Sans', sans-serif;
}
`;