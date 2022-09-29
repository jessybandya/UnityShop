import React, { Component } from 'react'
//import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class Checkout extends Component {
 
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
    <h1>Checkout here.</h1>
    </div>)
  }
}

export default Chceckout;