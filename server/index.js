// const bodyParser = require('body-parser') // REMOVED BODY-PARSER B/C ITS DEPRECATED
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

// const Games = require('./connections/games')
const Games = require('./model/games.model')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

// app.get('/test', (req, res) => {
    
//     console.log("TEST WORKED")
//     res.send('test worked')
    
// });

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// app.listen(5000, () => {
//     console.log(`SERVER RUNNING ON PORT: ${process.env.PORT} `)
// })

app.get('/test', (req, res) => {

    console.log("TEST WORKED")
    res.send('test worked')

});

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//     .then(() => {

//         app.use('/games', gameRouter)



//         app.listen(5000, () => {
//             console.log(`SERVER RUNNING ON PORT: ${process.env.PORT} `)
//         })
//     })

// const routes = require("./routes/clues.js")
// const routes = require("./routes/routes.js")

const gameRouter = require("./routes/games")
const clueRouter = require("./routes/clues")

// EVERYTHING BELOW COMMENTED OUT FOR TESTING ON AUG 18

// app.use('/games', gameRouter)
 
// // // app.use(bodyParser.urlencoded({ extended: true }))   DEPRECATED
// // // app.use(bodyParser.json())   DEPRECATED

// app.use(cors());
// app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: true })); // alternate to using bodyParser

app.use('/games', gameRouter)

app.use('/clues', clueRouter)

// app.get('/api/game', async(req, res) => {
//     const response = await Games.findOne({})
//     console.log("Response =>", resdponse)
//     res.json(resposne)
// })


// const apiPort = process.env.PORT

// app.use("/api", require("./routes/clues.js"))


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        // app.use('/games', gameRouter)
        // app.use('/clues', clueRouter)
        // const app = express()
        // app.use(cors())
        // app.use(express.json({ extended: true })); // alternate to using bodyParser
        // app.use(express.urlencoded({ extended: true }));
        // app.use(express.json({ extended: true })); // alternate to using bodyParser
        // app.use(express.urlencoded({ extended: true })); // alternate to using bodyParser
        // app.use('/games', gameRouter)

        app.listen(3000, () => {
            console.log(`Server running on port:  ${process.env.PORT}`)
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