const mongoose = require('mongoose')

// mongoose
//     .connect("mongodb://localhost:27017/Prepardy", { useNewUrlParser: true })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })

// const db = mongoose.connection

// module.exports = db

// GAMES CONNECTION STRING:
//      "mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/games?retryWrites=true&w=majority"
// CLUES CONNECTION STRING:
//      "mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/clues?retryWrites=true&w=majority"

mongoose.connect("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/clues?retryWrites=true&w=majority", { useNewUrlParser: true }, (error) => {

    if (!error) {
        console.log("Success Connected!");
    }
    else {
        console.log("Error connecting to database." + error)
    }
});

// const db = mongoose.connection

// module.exports = db
