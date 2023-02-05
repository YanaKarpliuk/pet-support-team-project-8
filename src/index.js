import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import './index.css';

import theme  from "./theme";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <ThemeProvider theme={theme}>
    <App />
   </ThemeProvider>
  </BrowserRouter>
 </React.StrictMode>,
);
