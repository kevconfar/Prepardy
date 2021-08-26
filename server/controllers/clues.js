// THIS FILE CONTAINS ALL THE HANDLERS FOR THE ROUTES

const Clues = require("../connections/clues.js")


// exports.getCluesByDifficulty()
// const MissedClues = require("../connections/missedClues.js")
// const Games = require("../connections/games.js")

// // THOUGHT, MAYBE WE DO NEED SOMETHING LIKE DBO.CONNECT ......

// // CLUE EXTRACTION ROUTE HANDLERS


//         // GET ALL CLUES
// const getClues = async (req, res) => {
//     try {

//         const clues = await Clues.find();
//         return res.status(200).json(clues);

//     } catch (error) {

        
//         res.status(404).json({ message: error.message });   
//     }
// }

//         // GET CLUES BY GAMEID
const getCluesById = async (req, res) => {

    try {

        const id = req.params.id // ORIGINAL: depends on the ID value being calcuated in the React portion
        const clues = await Clues.find({ gameID: id }).limit(61)
        // console.log(clues)
        
        // res.send(clues)
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

//         // GET CLUES BY DIFFICULTY
const getCluesByDifficulty = async (req, res) => {
    try {

        const diff = req.params.difficulty
        const clues = await Clues.find({value: diff}).limit(61)
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}


module.exports = { getCluesById, getCluesByDifficulty }



