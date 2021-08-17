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
    userAnswer : {
        type : String
    }

});

module.exports = missedClueSchema
