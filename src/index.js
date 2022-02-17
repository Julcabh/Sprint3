import React from 'react';
import ReactDOM from 'react-dom';
import { AppRouters } from './AppRouters';
import { Provider } from 'react-redux'
import { store } from '../src/store/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <AppRouters />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
