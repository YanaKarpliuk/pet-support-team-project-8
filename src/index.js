import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  // BrowserRouter,
  HashRouter,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from './redux/store';
import { persistor } from './redux/store';

import theme from './theme';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <HashRouter>
        {/* <BrowserRouter basename="pet-support-team-project-8"> */}
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        {/* </BrowserRouter> */}
      </HashRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
);
