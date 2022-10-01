import axios from 'axios';
import { setAuthToken } from '../helpers/setAuthToken'

const login = async (f, x) => {
  f.preventDefault();
  try{
    await alert('Sending login request...')
    const serverResponse = await axios.post('http://localhost:5000/api/client/signin', x);
  //get token and user from response
  const token = await serverResponse.data.token;
  const user = await serverResponse.data.user;

  alert(user.firstName)
  //set JWT token and user to local
  localStorage.setItem('token', token);
  //localStorage.setItem('user', user);
  
  //set token to axios common header
  setAuthToken(token);
  //redirect user to home page
  if(user.firstName){window.location.href = '/'} else {alert ('Login failed.')}
  return serverResponse
  } catch (error) {alert(`An error occurred: ${error}`)}
    }

export default login;