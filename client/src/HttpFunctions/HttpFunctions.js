const registrationFunction = async (f, x) => {
  f.preventDefault();
  

  const response = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(x)
  })
  
  const data = await response.json()
  if (data.error){
    console.log(data.error)
  }
  alert(`We have received ${data.status}`)
}

export default registrationFunction;