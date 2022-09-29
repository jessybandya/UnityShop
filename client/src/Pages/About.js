import React from 'react'

const About = () => (
  <div>
    <nav>
    <ul>
    <li><Link to='/signin'>Sign in</Link></li>
    <li><Link to='/register'>Register</Link></li>
    <li><Link to='/homepage'>Go home</Link></li>
  </ul>
  </nav>
  <Message>
    <Message.Header>About Us</Message.Header>
    <p>
      We updated our privacy policy here to better service our customers. We
      recommend reviewing the changes.
    </p>
  </Message>
  </div>
)

export default About