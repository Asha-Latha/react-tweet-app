import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import axios from 'axios';
// axios.defaults.baseURL='http://localhost:9500/v1';
// axios.defaults.headers.common['Authorization']='Bearer ' + localStorage.getItem('token') + localStorage.getItem('loginId')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



