import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
    *, *::before, *::after {
      box-sizing: border-box;
  }
  body, #root{
    min-height: 100vh;
  }
  button{
    padding: 0;
    border: 0;
  }
  #root { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }
`;

export default GlobalStyle;
