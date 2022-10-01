import * as React from 'react'
import axios from 'axios'
import { setAuthToken } from "../helpers/setAuthToken"

const register = async (f, x) => {
  f.preventDefault();
try{
  alert('Now submitting form.')
  const regResponse = await axios.post('http://localhost:5000/api/client/signup', x);
//get token from response
const token = await regResponse.data.token;
//set JWT token and user to local
localStorage.setItem('token', token);
localStorage.setItem('user', user);

//set token to axios common header
setAuthToken(token);
//redirect user to home page
if(user){window.location.href = '/'} else {alert ('Registration failed.')}

  return regResponse
} catch(err){alert(`An error occurred: ${err}`)}
}

export default register;