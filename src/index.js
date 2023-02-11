import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  //   BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import appStore from './redux/store';

import theme from './theme';
import App from './App';
const { store, persistor } = appStore;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
