const express = require('express')
const bodyParser = require('body-parser')
const cecho = require("./commands/test/cecho.js")
const config = require('./config/config.json').guessing
const app = express()
const port = 8080;
app.use(express.static('wwwroot'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


// -----------------------------------
// GET
// -----------------------------------

// get index.html
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/wwwroot/')
})

// get received
app.get('/GET/', function (req, res) {
    res.send("GET received")
})

// get cecho
app.get('/GET/cecho/', function (req, res) {
    if (cecho.to_send !== "") {
        res.send(cecho.to_send)
        cecho.to_send = ""
    } else {
        res.send("GET received")
    }
})
// -----------------------------------



// -----------------------------------
// Post
// -----------------------------------

// post received
app.post('/POST/', function(req, res) {
    res.send("POST received")
})

// post progress
app.post('/POST/progress/', function (req, res ) {
    config.solution = req.body.solution
    config.guessed = false
    console.log("POST solution: " + req.body.solution)
})
// -----------------------------------



// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
