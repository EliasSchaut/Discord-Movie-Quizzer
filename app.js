const express = require('express')
const cecho = require("./commands/test/cecho.js")
const app = express()
app.use(express.static('wwwroot'))
const port = 8080;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/wwwroot/')
})


app.get('/GET/', function (req, res) {
    if (cecho.to_send !== "") {
        cecho.to_send = ""
        res.send(cecho.to_send)
    } else {
        res.send("GET received")
    }
})

app.post('/POST/', function(req, res) {
    res.send("POST received")

})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})