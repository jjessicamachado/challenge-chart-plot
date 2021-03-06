import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from "./styles/global";
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import Router from './Router';

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <div>
      <Router />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
