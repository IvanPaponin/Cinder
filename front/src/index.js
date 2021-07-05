import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeContextProvider } from './context/context'
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';
axios.defaults.withCredentials = true


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
