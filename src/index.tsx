import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header/Header';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header></Header>
  </React.StrictMode>
);
