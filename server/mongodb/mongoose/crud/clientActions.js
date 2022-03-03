//CRUD operations for Users
ProductModel = require('../models/product.js')
CartModel = require('../models/cart.js')
BrandModel = require('../models/brand.js')
UserModel = require('../models/user.js')

//Create an account for himself
app.put('/users', (req, res) => {
  //Use PassportJS logic
})

//Update his/her profile
app.put('/users', (req, res) => {
  UserModel.findOneAndUpdate({
    req.body.id
  }, {
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
    merchant: req.body.merchant,
    updated: Date.now,
  }))
  //Surf through all the products
  app.get('/', (req, res) => {
    ProductModel.find({})
  })

  //Search the database for desired products
  app.get('/search', (req, res) => {
    res.send(ProductModel.find({
      name: req.body.name
    }))
  })

  //Search the database for desired brands
  app.get('/search', (req, res) => {
    res.send(BrandModel.find({
      name: req.body.name
    }))
  })

  //See product information such as category, price, name, review, picture, etc.
  app.get('/card', (req, res) => {
    res.send(ProductModel.find({id: req.body.id}))
  })

  //Add many products to the shopping cart and is able to view the cart
  app.put('/cart', (req, res) => {
    CartModel.findOneAndUpdate({ id: req.body.id}, {})
  })

  //Delete products from the cart
  app.delete('/cart', (req, res) => {
    CartModel.deleteOne({id: req.body.id})
  })

  //Modify the quantity of products inside the cart
  app.put('/cart', (req, res) => {
    CartModel.findOneAndUpdate({id: req.body.id}, {quantity: req.body.quantity})
  })

  //Pay for the products in the cart
  app.get('/checkout', (req, res) => {
    //Call StripeJS
  })