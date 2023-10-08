import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App/App';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/project_Car-Sharing">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
