require('../src/db/mongoose')
const Task = require('../src/models/task')

/*
Task.findByIdAndDelete('5d206be2604df4bb986e4c20').then(() => {
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
*/

const deleteTaskAndCount = async (id, completed) => {
    //const deleteTask = await Task.findByIdAndDelete('5d206b07ac98dcab14ef4ebe')
    
    // if we do not need the deleteTask result, we can do it this way
    await Task.findByIdAndDelete('5d206b07ac98dcab14ef4ebe')
    const countTask = await Task.countDocuments({ completed })
    return countTask
}

deleteTaskAndCount('5d206b07ac98dcab14ef4ebe', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})