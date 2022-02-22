import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

class Error404 extends Component {
 
  state = { };

  render() {
    const { value } = this.state
    return(<h1>That link is void.</h1>)
  }
}

export default Error404;