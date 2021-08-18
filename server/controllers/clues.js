// THIS FILE CONTAINS ALL THE HANDLERS FOR THE ROUTES

const Clues = require("../connections/clues.js")
const MissedClues = require("../connections/missedClues.js")
const Games = require("../connections/games.js")

// THOUGHT, MAYBE WE DO NEED SOMETHING LIKE DBO.CONNECT ......

// CLUE EXTRACTION ROUTE HANDLERS


        // GET ALL CLUES
const getClues = async (req, res) => {
    try {

        const clues = await Clues.find();
        res.status(200).json(clues);

    } catch (error) {

        
        res.status(404).json({ message: error.message });   
    }
}

        // GET CLUES BY GAMEID
const getCluesById = async (req, res) => {

    try {

        // const id = (parseInt(req.params.id) + 1).toString()
        const id = req.params.id // ORIGINAL: depends on the ID value being calcuated in the React portion
        const clues = await Clue.find({ gameID: id }).limit(61)

        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

        // GET CLUES BY DIFFICULTY
const getCluesByDifficulty = async (req, res) => {
    try {

        const diff = req.params.difficulty
        const clues = await Clues.find({value: diff}).limit(61)
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}



// MISSED_CLUE ROUTE HANDLERS


        // CREATES NEW "MISSED CLUE" DOC
const createMissedClue = async (req, res) => {

    const missedClues = req.body; // array of IncorrectClue objects

    try {

        await MissedClues.insertMany(missedClues);
        res.status(201).json(missedClues);

    } catch (error) {
        
        res.status(409).json({ message: error.message });
    }

}


// GAME COLLECTION ROUTE HANDLERS

        // GETS GAME DOCS BY YEAR
const gameByYear = async (req, res) => {
    try {

        const year = req.params.year
        const clues = await Games.find({date: year})
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

        // GETS GAME DOCS BY SEASON
const gameBySeason = async (req, res) => {
    try {

        const season = req.params.season
        const clues = await Games.find({ season: season })
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

        // GET ONE GAME
const oneGame = async (req, res) => {
    try {

        // const season = req.params.season
        const clues = await Games.findOne()
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}


module.exports = {oneGame, gameBySeason, gameByYear, createMissedClue, getCluesByDifficulty, getCluesById, getClues}



