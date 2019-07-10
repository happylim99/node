const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})
/*
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be password')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be positive')
            }
        }
    }
})

const me = new User({
    name: 'sean',
    email: 'sean@test.com   ',
    password: 'password'
})

me.save().then((me) => {
    console.log(me)
}).catch((error) => {
    console.log('Error', error)
})
*/

const Task = mongoose.model('task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const todo1 = new Task({
    description: 'todo1 ',
    
})

todo1.save().then((todo1) => {
    console.log(todo1)
}).catch((error) => {
    console.log(error)
})
