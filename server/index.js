var express = require("express");
var app = express();
var cors = require("cors");
require("dotenv").config({path: "./config.env"});

app.use(cors());
//app.use(express.json());
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(require("./routes/record"));

// get driver connection
//const dbo = require("./db/conn");

//routes
app.get('/', (req, res) => {
  res.send('hello world')})

app.post('/api/register', (req, res) => {
  console.log(req.body)
  //console.log('Got it!')
  res.end('data in!');
  res.json( {status: 'ok'} )
})

app.delete('/', ()=>{})

app.listen(port, () => {
  //var host = server.address().address
  /* perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });*/
  console.log(`Server is now running on port: ${port}!`);
});