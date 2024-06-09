import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

// Get the root element
const rootElement = document.getElementById('root');

// Create the root using createRoot
const root = createRoot(rootElement);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
