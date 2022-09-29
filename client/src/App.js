//import './App.css';
import React from 'react';
//import RegistrationForm from './Pages/Register.js';

//import AppRouter from './Routing/AppRouter'
import {
  Link,
  Route,
  Routes
} from "react-router-dom";


import ResponsiveAppBar from './Pages/UIElements/Appbar'
import SignIn from './Pages/SignIn.js';
//import Landing from './Pages/Landing.js';
import SignUp from './Pages/Signup.js';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div>
    {/*<Landing />*/}
    <ResponsiveAppBar />
    <nav>
    <ul>
    <li><Link to='/signin'>Sign in</Link></li>
    <li><Link to='/signup'>Sign up</Link></li>
    <li><Link to='/homepage'>Go home</Link></li>
    </ul>
    </nav>
   <Routes>
   <Route path='signin' exact element={<SignIn />} />
   <Route path='signup' exact element={<SignUp />} />
   <Route path='homepage' exact element={<Homepage />} />
   </Routes>
    </div>
  )
}

export default App;