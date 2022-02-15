import React, { Component } from 'react'
import { Button, Checkbox, Form, Input, Radio, Select, TextArea } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleFieldControl extends Component {
 
  state = { fname:'', lname:'', more:'', submittedFname:'', submittedLname:'', submittedMore:''};
  

async registerUser(f){
  f.preventDefault()
  
  const response = await fetch('localhost:5000/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ submittedFname, submittedLname, submittedMore })
  })
  
  const data = await response.json()
  console.log(data)
}



  handleChange = (e, {fname, lname, more}) => {
    this.setState({ [name]: value })
    }
   
  handleSubmit = () => {
    alert('Submit works.')
    const {fname, lname, more} = this.state
    this.setState({submittedFname: fname, submittedLname: lname, submittedMore: more})
    registerUser(event)
  }


  render() {
    const { value } = this.state
    return (
      <Form onSubmit = {this.handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            name='fname'
            //value={fname}
            control={Input}
            label='First name'
            placeholder='First name'
            onChange={this.handleChange}
          />
          <Form.Field
            control={Input}
            name='lname'
            //value={lname}
            label='Last name'
            placeholder='Last name'
            onChange={this.handleChange}
          />
          <Form.Field
            control={Select}
            //name='gender'
            //value={gender}
            label='Gender'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Quantity</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Field
          //name='more'
          //value={more}
          control={TextArea}
          label='About'
          placeholder='Tell us more about you...'
          onChange={this.handleChange}
        />
        <Form.Field
          //name='terms'
          //value={terms}
          control={Checkbox}
          label='I agree to the Terms and Conditions'
          onChange={this.handleChange}
        />
       <Button type='submit'> 'Submit' </Button>
       
      </Form>
    )
  }
}

export default FormExampleFieldControl;