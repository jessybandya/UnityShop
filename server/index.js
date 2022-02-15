const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({
  path: "./config.env"
});


const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
//app.use(require("./routes/record"));

// get driver connection
//const dbo = require("./db/conn");

//routes
app.get('/', (req, res) => {
  res.send('hello world!')})

app.post('/api/register', (req, res) => {
  console.log(req.body.json());
  res.send('data in!');
  res.json( {status: 'ok'} );
})

app.listen(port, () => {
  /* perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });*/
  console.log(`Server is now running on port: ${port}!`);
});