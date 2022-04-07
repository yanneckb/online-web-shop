import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store.redux';
import { PersistGate } from 'redux-persist/integration/react';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const initialPayPalOptions = {
  'client-id': 'test',
  currency: 'EUR',
  // 'data-client-token': 'abc123xyz==',
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PayPalScriptProvider options={initialPayPalOptions}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PayPalScriptProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
