import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './createStores'
import { Provider } from 'react-redux'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
