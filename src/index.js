import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-gradient-to-r from-[#282c34] to-[#21252b]">
      <App />
    </div>
  </React.StrictMode>
);