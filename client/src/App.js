import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Cart from './components/Cart/Cart'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cart" component={Cart}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
