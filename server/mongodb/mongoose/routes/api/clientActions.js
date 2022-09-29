//CRUD operations for users
const router = require('express').Router()
const db = require('../../connector')
ProductModel = require('../../models/product.js')
CartModel = require('../../models/cart.js')
BrandModel = require('../../models/brand.js')
UserModel = require('../../models/user.js')

//Importing dependendlcies
const passport = require('passport')
const localStrategy = require('passport-local')
const session = require('express-session')
const flash = require('connect-flash')

//Middleware
router.use(flash())
router.use(session({
  secret: 'test-secret', resave: false, saveUninitialized: false
}))

//A user can:
//Create an account
router.post('/signup', passport.authenticate('local-signup', {
  successRedirect: '/api/client/profile',
  failureRedirect: '/api/client/signup',
  failureFlash: true // allow flash messages
}))

//Sign in
router.post('/signin', passport.authenticate('local-login', {
  successRedirect: '/api/client/profile',
  failureRedirect: '/api/client/signin',
  failureFlash: true
})
)

//Sign out
router.get("/signout", (req, res)=> {
  req.logout();
  res.redirect("/");
});

//loggedIn check for profile route
function loggedIn(req, res, next) {
  if (!req.user) {
    next();
  } else {
    console.log('Try again.')
    res.redirect('/api/client/signin');
  }
}

//View his/her profile
router.get('/profile', loggedIn, (req, res, next) => {
  console.log('User logged in.')
  console.log(`${req.user}`)
  res.send(req.user)
})

//Update his/her profile
router.put('/profile/update', (req, res) => {
  UserModel.findOneAndUpdate({
    id: req.body.id
  }, {
    email: req.body.id,
    phoneNumber: req.body.phoneNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    merchant: req.body.merchant,
    updated: Date.now,
  })})

//Surf through all the products
router.get('/products', (req, res) => {
  ProductModel.find({})
  res.send('Serving')
})

//Search the database for desired products
router.get('/search/products', (req, res) => {
  ProductModel.find({
    name: req.body.name
  })
})

//Search the database for desired brands
router.get('/search/brands', (req, res) => {
  res.send(BrandModel.find({
    name: req.body.name
  }))
})

//See product information such as category, price, name, review, picture, etc.
router.get('/card', (req, res) => {
  res.send(ProductModel.find({
    id: req.body.id
  }))
})

//Add many products to the shopping cart and is able to view the cart
router.put('/cart', (req, res) => {
  CartModel.findOneAndUpdate({
    id: req.body.id
  }, {
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
    quantity: Number,
    purchasePrice: {
      type: Number,
      default: 0
      },
      totalPrice: {
        type: Number,
      default: 0
      },
      priceWithTax: {
        type: Number,
      default: 0
      },
      totalTax: {
        type: Number,
      default: 0
      },
      status: {
        type: String,
      default: 'Not processed',
        enum: ['Not processed', 'Processing', 'Shipped', 'Delivered', 'Cancelled']
      }
    })
  })

  //Delete products from the cart
  router.delete('/cart', (req, res) => {
    CartModel.deleteOne({
      id: req.body.id
    })
  })

  //Modify the quantity of products inside the cart
  router.put('/cart', (req, res) => {
    CartModel.findOneAndUpdate({
      id: req.body.id
    }, {
      quantity: req.body.quantity
    })
  })

  //Pay for the products in the cart
  router.get('/checkout', (req, res) => {
    //Call StripeJS
  })


  //Sign out
  router.get("/signout", (req, res)=> {
    req.logout();
    res.redirect("/");
  });
  
  module.exports = router