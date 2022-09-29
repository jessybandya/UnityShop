/*https://www.digitalocean.com/community/tutorials/easy-node-authentication-setup-and-local#toc-handling-signupregistration*/

// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

const db = require('../connector')
var UserModel = require('../models/user');


module.exports = function(passport) {
  // passport session setup
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });




  // LOCAL SIGNUP
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'
  passport.use('local-signup', new LocalStrategy({// by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function(req, email, password, done) {
      // asynchronous
      // UserModel.findOne wont fire unless data is sent back
      process.nextTick(function() {
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        UserModel.findOne({
          email: req.body.email
        }, function(err, user) {
          // if there are any errors, return the error
          if (err) {
            console.log("Error.")
            //return
            done(err);
          }
          // check to see if theres already a user with that email
          if (user) {
            console.log("User already exists.")
            //return
            done(null, false, req.flash('signupMessage', 'That email is already taken.'));
          } else {
            console.log("Creating user...")
            // if there is no user with that email
            // create the user
            UserModel.create({
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              email: req.body.email,
              password: req.body.password,
            })
            /* set the user's local credentials
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);*/
          }
        });
      });
    }));


  // LOCAL LOGIN
  passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // allows us to pass back the entire request to the callback
  },
    function(req, email, password, done) {
      // find a user whose email is the same as the forms email
      UserModel.findOne({
        email: req.body.email
      }, function(err,
        user) {
        // if there are any errors,
        if (err)
          return done(err);
        // if no user is found,
        if (!user) {
          console.log('That account does not exist!')
          return done(null, false, req.flash('loginMessage', 'No user found.'));
        } // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (user.password != password) {
          console.log('Wrong password!')
          return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
        }// create the loginMessage and save it to session as flashdata

        // all is well, return successful user
        console.log('Fantastique')
        return done(null, user);
      });
    }));
};