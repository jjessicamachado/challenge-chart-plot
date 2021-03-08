import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.scss";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import Router from './Router';

ReactDOM.render(
  <ThemeProvider theme={light}>
    <GlobalStyle />
    <div className="mainContainer">
      <Router />
    </div>
  </ThemeProvider>,
  document.getElementById('root')
);
