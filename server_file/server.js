const express = require('express')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json({ type: "*/*" }))
const cors = require('cors')
var corsOptions={
    origin: 'http://example.com',
    optionSuccessStatus: 200
}
var routes = require('./routes.js')
app.use(cors())
app.use('/',routes)


var server = app.listen(8000, () => {
    
    var host = server.address().address
    var port = server.address().port
    console.log("App listening at %s:%s", host, port)
})

