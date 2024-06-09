import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

// Use createRoot to render the React app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
