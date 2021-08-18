const mongoose = require("mongoose");

const missedClueSchema = new mongoose.Schema({

    clueID : {
        type : String // will be the _ID of the missed Clue
    },
    userTags : {
        type : [String]
    },
    autoTags : {
        type : [String]
    },
    userIDs : {
        type : [String] // array of IDs from Users who got it wrong
    },
    userAnswer : { // add answer
        type : String
    },
    // THE FOLLOWING FIELDS WERE ADDED AUG 17
    person: String, // e.g. "George Bush"
    year: String, // e.g. "2017" ... Maybe make the field type a Number
    location: String, // e.g. "Rome"
    topic: String // e.g. "History", "Math", "Art", 
});

module.exports = missedClueSchema
