import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import { ThemeProvider } from 'styled-components';
import App from './App';
import theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
