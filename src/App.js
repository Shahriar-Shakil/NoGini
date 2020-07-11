import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'

import Home from './pages/Home';
import NearBy from './pages/NearBy';
import Register from './pages/Register';
import Search from './pages/Search';
import Payment from './pages/Payment'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <div className="App">
    <Route path='/nearby' component= {NearBy} />
    <Route   path='/register' component= {Register} />
    <Route   path='/search' component= {Search} />
    <Route exact  path='/' component= {Home} />
    <Route   path='/payment' component= {Payment} />
     

    </div>
    </BrowserRouter>
  );
}

export default App;
