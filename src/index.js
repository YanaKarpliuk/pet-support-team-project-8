import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  //   BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

import theme from './theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
