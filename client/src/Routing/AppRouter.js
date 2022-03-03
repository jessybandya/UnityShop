//import '../App.css';
//import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../Pages/Landing.js';
import RegistrationForm from '../Pages/Register.js';
import Login from '../Pages/Login.js';
import Homepage from '../Pages/Homepage.js';
import ItemCard from '../Pages/ItemCard.js';
import Checkout from '../Pages/Checkout.js';
import Profile from '../Pages/Profile.js';
import Admin from '../Pages/Admin.js';
import About from '../Pages/About.js';
import Error404 from '../Pages/Error404.js';

class AppRouter extends Component {
  
  state = {}
  render(){
  return
    
    <BrowserRouter>
    
      <Route path='/' exact component={Landing}/>
      <Route path='/register' exact component={RegistrationForm} />
      <Route path='/login' exact component={Login} />
      <Route path='/homepage' exact component={Homepage} />
      <Route path='/item' exact component={Item} />
      <Route path='/checkout' exact component={Checkout} />
      <Route path='/profile' exact component={Profile} />
      <Route path='/admin' exact component={Admin} />
      <Route path='/about' exact component={About} />
      <Route component={Error404} />
    
    </BrowserRouter>
    
  }
}

export default AppRouter;