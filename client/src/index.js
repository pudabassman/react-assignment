import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from  'axios'
axios.defaults.baseURL = 'http://localhost:3001/api/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
