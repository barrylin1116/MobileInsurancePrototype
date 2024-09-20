import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'assets/sass/app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('mobileInsurance')
);

reportWebVitals();
