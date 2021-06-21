import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Reservation } from './pages/Reservation';
import { Footer } from './cmp/Footer';


export default function App() {
  return (
    <div className="app-wrapper">
      <Switch>
        <Route component={Reservation} path='/reservation' />
        <Route component={MainPage} path='/' />
      </Switch>
      <Footer />
    </div>
  )
}
