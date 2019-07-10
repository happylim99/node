const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

//maintenance mode
/*
app.use((req, res) => {
    res.status(503).send('Maintenance on the go, please come back later')
})
*/

/*
app.use((req, res, next) => {
    if(req.method === 'GET') {
        res.send('get request are disable')
    } else {
        next()
    }
})
*/

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

/*
const main = async () => {
    // const task = await Task.findById('5d249b235b8daf87b4b6897e')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)
    
   const user = await User.findById('5d249b185b8daf87b4b6897c')
   await user.populate('tasks').execPopulate()
   console.log(user.tasks)
}

main()
*/
/*
const pet = {
    name: 'hal'
}
pet.toJSON = function () {
    return this
}
console.log(JSON.stringify(pet))
*/
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJhYmMxMjMiLCJpYXQiOjE1NjI2NDc0NjJ9.wQNmGM88uxWc6xBcnMFXecNa4ukKRRBNGd8vEaJCwsc
//part1: base64 encoded json string, also known as header
//part2: base64 encoded json string, payload or body, contains data which in our case id
//part3: signature use to verify the token
/*
const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'this is key', { expiresIn: '1 day'})
    console.log(token)

    const data = jwt.verify(token, 'this is key')
    console.log(data)
}
myFunction()
*/

/*
const bcrypt = require('bcryptjs')
const myFunction = async () => {
    const password = 'abcd1234'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('abcd1234', hashedPassword)
    console.log(isMatch)
}
*/

/*
const aab = async (email) => {
    var user;
    await User.findOne({email}, function(err,pro){
        user=pro;
      });
    if(user) {
        //not working, it always return promise
        return "found"
    } else {
        return "not found"
    }
}
*/