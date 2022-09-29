
require('dotenv').config({ path: require('find-config')('.env') })

alert(process.env.TEST_VARIABLE)
console.log(process.env.TEST_VARIABLE)