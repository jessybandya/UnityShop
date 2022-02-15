var mongoose = require ('mongoose');

var modellSchema = new mongoose.Schema(
  {
    _id: String,
    name: String,
    email: String,
    password: String
  },
  //{ versionKey: false }
  );

module.exports = mongoose.model('user', modellSchema, 'users');