import React, { Component } from 'react'
//import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class Admin extends Component {
 
  state = { };

  render() {
    
    return(<div>
    <nav>
    <ul>
    <li><Link to='/signin'>Sign in</Link></li>
    <li><Link to='/register'>Register</Link></li>
    <li><Link to='/homepage'>Go home</Link></li>
    </ul>
    </nav>
    
    
    <h1>Admin privileges here.</h1>
    
    <p>Products</p>
     <p>Brands</p>
 <p>Buyers</p>
 <p>Sellers</p>
 <p>Admins</p>
    </div>)
  }
}

export default Admin;