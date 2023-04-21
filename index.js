import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Header from './Header';

import Corbalar from './Corbalar';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />

    <div className='container'>
      <div className='row '>

        <div className='col-7 py-4' id='body'>
          <Corbalar/>
        </div>

        <div className='col-1 py-4'></div>

        <div  className='col-4 py-5' id='siparis'>
          <h3 id='bos'></h3>
          <ul id='sepet-listesi'></ul>
          <p id='toplam-fiyat'></p>
        </div>

      </div>

    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
