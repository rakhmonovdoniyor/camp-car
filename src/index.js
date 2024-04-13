import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Navbar/>}/>



      </Routes>
    
    
    </BrowserRouter>
    
  </React.StrictMode>
);


