const mongoose = require("mongoose");

var ClueSchema = new mongoose.Schema({
    clueText : {
        type : String
    },
    clueAnswer : {
        type : String
    },
    clueValue : {
        type : String
    },
    clueCategory : {
        type : String
    },
    clueCorrect : {
        type : Boolean
    },
    clueTags : {
        type : Array
    },
    gameID : {
        type : Number
    }
});

mongoose.model("Clue", ClueSchema)



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