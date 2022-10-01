import React from 'react';
import AppLayout from './components/AppLayout.js'
import {setAuthToken} from './helpers/setAuthToken'

function App() {
  
const token = localStorage.getItem("token");
 if (token) {
     setAuthToken(token)
 }
 
  return (
    <div>
      <AppLayout />
    </div>)
}

export default App;