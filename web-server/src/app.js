const path = require('path') // core node module
const express = require('express')
const hbs = require('hbs')

//console.log(__dirname)
//console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.send([
        {
            name: 'name1',
            age: 20
        },
        {
            name: 'name2',
            age: 30
        }

    ])
    /*
    res.render('index', {
        title: 'weather app',
        name: 'index name'
    })
    */
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'This is about page',
        name: 'about name'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'This is help page',
        name: 'help name'
    })
})

/*
app.get('', (req, res) => {
    res.send('<h1>hello world</h1>')
})

app.get('/help', (req, res) => {
    res.send([
        {
            name: 'sean',
            age: 30
        },
        {
            name: 'melissa',
            age: 25
        }
    ])
})

app.get('/about', (req, res) => {
    res.send('<h3>Glad day</h3>')
})
*/
app.get('/weather', (req, res) => {
    res.send([
        {
            weather1: 'good day',
            description: 'really good day'
        },
        {
            weather2: 'best day',
            description: 'really best day'
        }
    ])
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})