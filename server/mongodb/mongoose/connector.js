/*Code from Moz://a website

Link
https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

*/
require('dotenv').config({
  path: require('find-config')('.env')})

//Import the mongoose module
var mongoose = require('mongoose').set('debug', true);

//Store URI
username = process.env.USERNAME;
password = process.env.PASSWORD;
cluster = process.env.CLUSTER;
dbname = process.env.DATABASE_NAME;



const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`


mongoose.connect(uri, {
  useNewUrlParser: true, useUnifiedTopology: true
});

//Optional. Used to improve performance.
//mongoose.set('autoIndex', false);

//Get the default connection
var db = mongoose.connection;

//Check for connection or notify of errors
db.once('open', _ => {
  console.log('Database connected!')})

db.on('error', err => {
  console.error('connection error:', err)})

module.exports = db;