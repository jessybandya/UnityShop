var router = express.Router();
//Getting database connection...
const db = require('mongodb/mongoose/connector.js')
//var StudentModel = require('./studentschema');

var UserModel = require('./mongodb/mongoose/models/user')



//Not needed in mongoose 5.
//mongoose.Promise = global.Promise;
  
/*mongoose.connect(db, { useNewUrlParser : true, 
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});*/
  
module.exports = router;