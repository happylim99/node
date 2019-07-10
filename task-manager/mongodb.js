// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')
/*
const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
*/

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if(error){
        return console.log('Unable to connect to database')
    }
    
    const db = client.db(databaseName)

    /*
    db.collection('tasks').insertOne({
        taskDescription: 'task 3',
        completed: false
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })
    */
    /*
    db.collection('users').insertOne({
        name: 'john',
        age: 35
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert user')
        }
        console.log(result.ops)
    })
    */
   /*
   db.collection('users').insertMany([
       {
           name: 'sean',
           age: 40
       },
       {
           name: 'melissa',
           age: 30
       }
   ], (error, result) => {
    if(error) {
        return console.log('Unable to insert documents')
    }
    console.log(result.ops)
    })
    */
    /*
    db.collection('users').findOne({ _id: new ObjectID("5d1ee9e8dd96baaab094ab9e") }, (error, user) => {
        if(error) {
            return console.log('Unable to fetch')
        }
        console.log(user)
    })
    */
    /*
    db.collection('users').find( { name: 'sean' }).count((error, users) => {
        console.log(users)
    })
    */
   /*
   db.collection('tasks').findOne({ _id: new ObjectID("5d1ef058bec6fa98bc49d3f5")}, (error, task) => {
        if(error) {
            return console.log('No task found')
        }
        console.log(task)
   })
   db.collection('tasks').find({ completed: false }).toArray((error, task) => {
        if(error) {
            return console.log('No record found')
        }
        console.log(task)
   })
   */
  /*
    db.collection('users').updateOne({_id: new ObjectID("5d1eebd51e46c9129ce25d4e")}, { $set: {
                name: 'sean2'
            }
        }).then((result) => {
                console.log(result)
        }).catch((error) => {
                console.log(error)
        })
        */
       /*
       db.collection('users').updateOne({_id: new ObjectID("5d1eebd51e46c9129ce25d4e")}, { 
           $inc: {
                age: 1
            }
        }).then((result) => {
                console.log(result)
        }).catch((error) => {
                console.log(error)
        })
        */
       /*
       db.collection('tasks').updateMany({
           completed: false
       }, {
           $set: {
               completed: true
           }
       }).then((result) => {
            console.log(result)
       }).catch((error) => {
            console.log(error)
       })
       */
      /*
      db.collection('users').deleteMany({
          age: 30
      }).then((result) => {
            console.log(result)
      }).catch((error) => {
            console.log(error)
      })
      */
     db.collection('users').deleteOne({
         _id: new ObjectID("5d1eef7af959a6a3389c1c5c")
     }).then((result) => {
         console.log('Delete successfully')
     }).catch((error) => {
         console.log('Delete error')
     })
    })