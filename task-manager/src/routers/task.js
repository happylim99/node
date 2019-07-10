
const express = require('express');
const Task = require('../models/task')
const auth = require('../middleware/auth')
const router  = new express.Router()

//task
/*
router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})
*/
router.post('/tasks', auth, async (req, res) => {
    const task = new Task({
        ...req.body,
        owner: req.user._id
    })

    try {
        await task.save()
        res.status(201).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

/*
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.send(tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})
*/

router.get('/tasks', auth, async (req, res) => {
    try {
        /*
        const tasks = await Task.find({ owner:req.user._id})
        res.send(tasks)
        */
       //optional way of doing the above
       await req.user.populate('tasks').execPopulate()
       res.send(req.user.tasks)
    } catch (e) {
        res.status(500).send(e)
    }
})

/*
router.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const task = await Task.findById(_id)
        if(!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})
*/

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id
    try {
        //findOne({ find by ??, filter by ??})
        
        const task = await Task.findOne({ _id, owner: req.user._id})
        
        if(!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

router.patch('/tasks/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'completed']
    const isValid = updates.every((update) => allowedUpdates.includes(update))
    
    if(!isValid) {
        return res.status(400).send()
    }

    try {
        //const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true})
        //before auth
        //const task = await Task.findById(req.params.id)
        //after auth
        const task = await Task.findOne({ _id: req.params.id, owner: req.user._id })
        
        if(!task) {
            return res.status(404).send()
        }
        updates.forEach((update) => task[update] = req.body[update])
        await task.save()
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tasks/:id', auth, async (req, res) => {
    try {
        //const task = await Task.findByIdAndDelete(req.params.id)
        const task = await Task.findOneAndDelete({ _id: req.params.id, owner: req.user._id })
        if(!task) {
            return res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
    

})

module.exports = router