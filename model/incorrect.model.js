const mongoose = require("mongoose");

// var IncorrectSchema = new mongoose.Schema({
//     clueId: {
//         type: ObjectId
//     },

    

// });

// mongoose.model("Clues", CluesSchema)

module.exports = mongoose.model('Incorrect', IncorrectSchema);
