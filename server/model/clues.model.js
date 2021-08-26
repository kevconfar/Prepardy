const mongoose = require("mongoose");

const CluesSchema = new mongoose.Schema({
    question : {
        type : String,
        unique: true
    },
    answer : {
        type : String
    },
    value : {
        type : Number
    },
    category : {
        type : String
    },
    gameID : {
        type : Number
    },
    urlID : {
        type : Number
    },
    correct : {
        type : Boolean,
        default : true
    }
});


module.exports = CluesSchema


