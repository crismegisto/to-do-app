import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import App from 'src/index';

export default function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
