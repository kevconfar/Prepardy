const mongoose = require("mongoose");

var IncorrectSchema = new mongoose.Schema({
    clueId: {
        type: ObjectId
    },
    answer: {
        type: String
    },
    value: {
        type: Number
    },
    category: {
        type: String
    },
    correct: {
        type: Boolean
    },
    tags: {
        type: Array
    },
    gameID: {
        type: String
    }
});

// mongoose.model("Clues", CluesSchema)

module.exports = mongoose.model('Incorrect', IncorrectSchema);
