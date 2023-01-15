import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigationbar from './Componenet/Navigationbar';
import HomePage from './Componenet/HomePage';
import Router from './Router';

function App() {
  return (
    
    <div className='bg-dark'>
    <Navigationbar/>
    <Router/>
    </div>
    
  );
}

export default App;
