import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global styles
import App from './app'; // Import the main App component

// Rendering the root component (App) into the DOM
const root = ReactDOM.createRoot(document.getElementById('root')); // 'root' is the id of the div in index.html
root.render(
  <React.StrictMode>
    <App /> {/* Your main application */}
  </React.StrictMode>
);

