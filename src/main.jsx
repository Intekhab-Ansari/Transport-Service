import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Design System & Stylesheets
import './styles/main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/calculator.css';
import './styles/fleet.css';
import './styles/tracking.css';
import './styles/pages.css';

const rootElement = document.getElementById('root') || document.getElementById('app');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
