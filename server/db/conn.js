// UNDETERMINED IF THIS FILE WILL BE NECESSARY
// MAY BE NECESSARY FOR SERVER/INDEX.JS

// const mongoose = require('mongoose')

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

// mongoose.connect("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/clues?retryWrites=true&w=majority", { useNewUrlParser: true }, (error) => {

//     if (!error) {
//         console.log("Success Connected!");
//     }
//     else {
//         console.log("Error connecting to database." + error)
//     }
// });

// const db = mongoose.connection

// module.exports = db


// ADDED CODE BELOW ON 8/16

// const dotenv = require('dotenv')
// dotenv.config()


// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });



const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

var _db;

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("myFirstDatabase");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};



