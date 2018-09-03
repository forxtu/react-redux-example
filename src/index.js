import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// import { store } from './store'
import configureStore from "./store";

const reduxStore = configureStore( window.REDUX_INITIAL_DATA );

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();