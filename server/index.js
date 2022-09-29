require("dotenv").config({
  path: "./config.env"
});
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require('./mongodb/mongoose/routes')
const morgan = require('morgan');

//Authentication
const passport = require('passport');
require('./mongodb/mongoose/config/passport')(passport);
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

//Get connection to MongoDB Atlas
const db = require('./mongodb/mongoose/connector')

app.use(session({
  secret: 'ischingystilltheman',
  resave: true, //confirm this value
  saveUninitialized: false,
  cookie: {
    secure: false
  }
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash())
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser())

//Route addition
app.use(routes)

app.listen(port, () => {
  //var host = server.address().address
  /* perform a database connection when server starts
  db.connectToServer(function (err) {
    if (err) console.error(err);
  });*/
  console.log(`Server is now running on port: ${port}!`);
});

app.timeout = 20000