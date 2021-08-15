// THIS FILE CONTAINS ALL THE HANDLERS FOR THE ROUTES

const Clues = require("../connections/clues.js")
const MissedClues = require("../connections/missedClues.js")
const Games = require("../connections/games.js")

// gets all clues
export const getClues = async (req, res) => {
    try {

        const clues = await Clues.find();
        res.status(200).json(clues);

    } catch (error) {

        res.status(404).json({ message: error.message });   
    }
}

// adds docs to MissedClue database
export const createMissedClue = async (req, res) => {

    const missedClues = req.body; // array of IncorrectClue objects

    try {

        await MissedClues.insertMany(missedClues);
        res.status(201).json(missedClues);

    } catch (error) {
        
        res.status(409).json({ message: error.message });
    }

}

// gets the next game, grab current ID in React, add 1, then use to get next game
// can also be used to grab games by ID
export const getGameById = async (req, res) => {

    try {

        const id = req.params.id
        const clues = await Clue.find({ gameID: id })

        res.status(200).json(clues);
        
    } catch (error) {

        res.status(404).json({ message: error.message });  
    }
}






