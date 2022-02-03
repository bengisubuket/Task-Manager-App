require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('611e4d32c9f20b3b3cf32977', { age: 3 }).then((user) => {
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})