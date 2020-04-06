import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Home/>
      </div>
    </BrowserRouter>
  );
}

export default App;
