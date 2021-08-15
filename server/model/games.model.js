const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
    gameID: {
        type: Number,
        unique: true
        // required: true
    },
    urlID : {
        type: Number,
        unique: true
        // required: true
    },
    date : {
        type: String,
    },
    scores : {
        type: Array
    },
    season : {
        type: Number
    }
});

module.exports = gamesSchema

