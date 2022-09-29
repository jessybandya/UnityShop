const loginFunction = (f, x) => {
  f.preventDefault();

  const response = fetch('http://localhost:5000/api/client/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(x)
  })
  .then((res)=> {
    alert(`Response: ${res}`)
  })
  .catch((err)=> {
    alert(`Error: ${err}`)
  })
  .finally(alert('The function ran.'))
}

export default loginFunction;