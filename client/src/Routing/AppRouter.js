//import '../App.css';
//import React, {Component} from 'react';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Landing from '../Pages/Landing.js';
//import RegistrationForm from '../Pages/Register.js';
import Login from '../Pages/Login.js';
import Homepage from '../Pages/Homepage.js';
import ItemCard from '../Pages/ItemCard.js';
import Checkout from '../Pages/Checkout.js';
import Profile from '../Pages/Profile.js';
import Admin from '../Pages/Admin.js';
import About from '../Pages/About.js';
import Error404 from '../Pages/Error404.js';

const AppRouter = () => {

  // state = {}
  // render() {
  return
  <div>
    <Routes>
      <Route path='/' exact element={<Landing />} />
      {/*<Route path='/register' exact element={<RegistrationForm />} />*/}
      <Route path='/login' exact element={<Login />} />
      <Route path='/homepage' exact element={<Homepage />} />
      <Route path='/item' exact element={<Item />} />
      <Route path='/checkout' exact element={<Checkout />} />
      <Route path='/profile' exact element={<Profile />} />
      <Route path='/admin' exact element={<Admin />} />
      <Route path='/about' exact element={<About />} />
      <Route element={<Error404 />} />
    </Routes>
  </div>

  //  }
}

export default AppRouter;