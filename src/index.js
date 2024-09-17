import React from 'react';
import ReactDOM from 'react-dom/client';  // Use react-dom/client
import './index.css';
import App from './App';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
