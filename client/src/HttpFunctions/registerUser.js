import * as React from 'react'

const registrationFunction = (f, x) => {
  f.preventDefault();

  alert('Now submitting form.')
  const response = fetch('http://localhost:5000/api/client/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(x)
  }).then(response => alert(response.status))
  .catch(error => alert(error))

  //const data = response.json()
}

export default registrationFunction;