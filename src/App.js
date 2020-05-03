import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Summary from './features/summary/Summary';
import Bonus from './features/bonus/Bonus';
import Bookings from './features/bookings/Bookings';

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Summary}/>
          <Route path='/reservas' exact component={Bookings}/>
          <Route path='/bonos' exact component={Bonus}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
