const mongoose = require("mongoose");

var CluesSchema = new mongoose.Schema({
    question : {
        type : String
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
    correct : {
        type : Boolean
    },
    tags : {
        type : Array
    },
    gameID : {
        type : String
    }
});


module.exports = mongoose.model('Clues', CluesSchema);





// clueText : These victories are named for the Roman general who's battlefield victories always came at a steep cost.
// clueAnswer: Pyhrric Victories
// clueValue: 200
// clueCategory: Roman History
// clueCorrect: False     
//  ** used for analyzing patterns and correlations between clues the user gets incorrect **
// clueTags: [ {"country": Rome}, 
//             {"centry": 1600}, 
//             {"person": Picasso}, 
//             {"occupation"}
//           ] 
//  ** PERHAPS HAVE THE tagger RECCOMEND TAG NAMES BASED ON PREVIOUS EXAMPLES **


