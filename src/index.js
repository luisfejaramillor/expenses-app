import React from 'react';
import ReactDOM from 'react-dom/client';
import { ExpensesApp } from './ExpensesApp';
import './style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ExpensesApp />
  </React.StrictMode>
);


