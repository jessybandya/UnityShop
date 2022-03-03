var express = require("express");
var app = express();
var cors = require("cors");
//const router = require('./routes')
require("dotenv").config({
  path: "./config.env"
});
const UserModel = require('./mongodb/mongoose/models/user')


//Get connection to MongoDB Atlas
const db = require('./mongodb/mongoose/connector')

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));


//routes
app.get('/', (req, res) => {

  var data = UserModel.findOne({
    firstName: 'Ellis'
  }, function (error, result) {
    if (error) {
      throw error
    }
    res.send(JSON.stringify(result))
  })

})


app.post('/api/register', (req, res) => {
  //console.log(req.body)
  //console.log('Got it!')
  res.end('data in!');
  res.json( {
    status: 'ok'
  })
})

app.delete('/', ()=> {})

app.listen(port, () => {
  //var host = server.address().address
  /* perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });*/
  console.log(`Server is now running on port: ${port}!`);
});

app.timeout = 20000