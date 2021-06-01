const express = require('express')
const bodyParser = require('body-parser')
const cecho = require("./commands/test/cecho.js")
const guessing = require('./js/guessing.json')
const score = require("./js/score_counter")
const config = require("./config/config.json")
const app = express()
const port = config.port
app.use(express.static(__dirname + '\\wwwroot\\'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// -----------------------------------
// GET
// -----------------------------------
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

// GET guessed-user
app.get('/GET/guessed-user/', function (req, res) {
    if (guessing.guessed) {
        res.send(` (guessed by ${guessing.guessed_user} from team ${guessing.guessed_team})`)
    } else {
        res.send("")
    }
})
// -----------------------------------



// -----------------------------------
// POST
// -----------------------------------

// post received
app.post('/POST/', function(req, res) {
    res.send("POST received")
})

// post solution
app.post('/POST/solution/', function (req, res ) {
    guessing.solution = req.body.solution
    guessing.guessed = false
    guessing.fail = false
    console.log("POST solution: " + req.body.solution)
    res.send()
})

// post fail
app.post('/POST/fail/', function (req, res ) {
    guessing.fail = true
    console.log("POST Fail!")
    res.send()
})

// post start
app.post('/POST/start/', function (req, res ) {
    guessing.started = true
    console.log("POST Start")
    res.send()
})

// post end
app.post('/POST/end/', function (req, res ) {
    guessing.ended = true
    console.log("POST End!")
    res.send()
})

// post reset
app.post('/POST/reset/', function (req, res ) {
    guessing.started = false
    guessing.ended = false
    guessing.solution = ""
    guessing.guessed = true
    score.reset()
    console.log("POST Reset!")
    res.send()
})
// -----------------------------------



// -----------------------------------
// LISTEN
// -----------------------------------
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
// -----------------------------------
