import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </React.StrictMode>
);
