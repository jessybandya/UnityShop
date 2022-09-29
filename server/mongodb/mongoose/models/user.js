const Mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const {
  Schema
} = Mongoose;

// User Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: () => {
      return this.provider !== 'email' ? false: true;
    }
  },
  phoneNumber: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  password: {
    type: String
  },
  merchant: {
    type: Schema.Types.ObjectId,
    ref: 'Merchant',
    default: null
    },
    provider: {
      type: String,
      required: true,
    default: 'email'
    },
    googleId: {
      type: String
    },
    facebookId: {
      type: String
    },
    avatar: {
      type: String
    },
    role: {
      type: String,
    default: 'ROLE_MEMBER',
      enum: ['ROLE_MEMBER', 'ROLE_ADMIN', 'ROLE_MERCHANT']
    },
    resetPasswordToken: {
      type: String
    },
    resetPasswordExpires: {
      type: Date
    },
    updated: Date,
    created: {
      type: Date,
    default: Date.now
    }
  });
/*
  //Generating a hash
  UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };*/

  /*Modelling syntax:
Mongoose.model('<collection Name>', SchemaName)
*/

//User Model
const UserModel = Mongoose.model('User', UserSchema);

module.exports = UserModel;