import React from 'react';
import { Form, Input, Field, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import registrationFunction from '../HttpFunctions/HttpFunctions.js';



const RegisterUser = () => {
  const formik = useFormik({
    initialValues: {
      firstName:'', lastName:'', email: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
      
    registrationFunction(event, values)
    },
  });
  
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h3>Register!</h3>
      
      <Form.Field required>
      <label>First name</label>
      <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       </Form.Field>
      
    <Form.Field>
      <label>Last name</label>
     <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
    </Form.Field>
      
    <Form.Field>
    <label>EMail</label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </Form.Field>
      <Button type="submit" floated="right">Submit</Button>
    </Form>
  );
};

export default RegisterUser