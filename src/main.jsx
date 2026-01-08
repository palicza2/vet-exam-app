import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Új
import './index.css'; // Új
import './i18n/config'; // Új

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Itt most az App komponens kerül renderelésre */}
  </React.StrictMode>,
);