//import '../App.css';
//import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing.js';
import RegistrationForm from './Register.js';
import Login from './Login.js';
import Homepage from './Homepage.js';
import ItemCard from './ItemCard.js';
import Checkout from './Checkout.js';
import Profile from './Profile.js';
import Admin from './Admin.js';
import About from './About.js';
import Error404 from './Error404.js';

class AppRouter extends Component {
  
  state = {}
  render(){
  return
    <p>Rendering Test</p>
    {/*<BrowserRouter>
    
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
    
    
    </BrowserRouter>*/}
    
  }
}

export default AppRouter;