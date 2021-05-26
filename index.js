
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

// var mongoUtil = require('mongoUtil');

// mongoUtil.connectToServer(function (err, client) {
//     if (err) console.log(err);
//     // start the rest of your app here
// });

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))







// const connection = require("./model");
// const express = require("express");
// const app = express();
// const path = require("path");
// const expressHandlebars = require("express-handlears");
// const bodyparser = require("body-parser");

// app.use(bodyparser.urlenocoded({
//     extended : true
// }));

// app.get("/", (req, res)=>{
//     res.send('<h1>Hello World!<h1>')
// })
