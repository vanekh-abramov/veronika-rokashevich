import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './reset.css'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import './settings/i18next';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
