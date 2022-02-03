require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('611f5dd135de2452f498ac96').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})