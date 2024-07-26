import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // App.js를 가져다 쓸 것.
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // index.html의 id가 root인 div태그를 가리킴.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
