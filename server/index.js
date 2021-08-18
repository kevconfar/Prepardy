// const bodyParser = require('body-parser') // REMOVED BODY-PARSER B/C ITS DEPRECATED
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const dotenv = require('dotenv')
dotenv.config()


const routes = require("./routes/clues.js")

const app = express()
 
// app.use(bodyParser.urlencoded({ extended: true }))   DEPRECATED
// app.use(bodyParser.json())   DEPRECATED

app.use(cors())
app.use(express.json({ extended: true })); // alternate to using bodyParser
app.use(express.urlencoded({ extended: true })); // alternate to using bodyParser

const apiPort = process.env.PORT

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        // app.use("/api", routes)

        app.listen(5000, () => {
            console.log(`Server running on port: ${apiPort} `)
        })
    })


// OLD CONNECT// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
// OLD CONNECT //   .then(() => app.listen(apiPort, () => console.log(`Server running on port: ${apiPort}`)))
// OLD CONNECT      .catch((error) => console.log(error.message));



// db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))




// app.use(bodyParser.urlencoded({ extended: true }))   DEPRECATED
// app.use(bodyParser.json())   DEPRECATED