const express = require("express");
const { getCluesById, getCluesByDifficulty } = require('../controllers/clues')


// const { getOneGame, getGamesBySeason, getGamesByYear, createMissedClue, getCluesByDifficulty, getCluesById, getClues } = require("../controllers/clues.js")

// const Games = require("../connections/games.js")

const router = express.Router();

// router.get("/games/season/:season", async (req, res) => {
//     const seasonNum = req.params['season']
//     console.log("TESTING OUT THE GAMESEASON ROUTER")
//     const games = await Games.find({season: seasonNum})
//     res.send(games)
// })



// // GET ONE CLUE THAT HAS SOMETHING AS ITS ANSWER
// router.get("/onegame", async (req, res) => {
//     console.log("TESTING OUT THE GAMESEASON ROUTER")
//     const games = await Games.findOne({})
//     res.status(200).json(games);

//     // res.send(games)
// })



// router.get('/game/:id', getClues) 
// // router.get('/clues/level/:difficulty', getCluesByDifficulty)
// router.get('/clueslevel/:difficulty', getCluesByDifficulty)


// // router.get('/clues/id/:id', getCluesById) // gets 61 clues with same gameID
router.get('/id/:id', getCluesById)
router.get('/difficulty/:difficulty', getCluesByDifficulty)


// // ROUTES THAT PULL UP GAME INFORMATION AND NOT SETS OF CLUES
// // THESE ROUTES WILL BE USED TO SELECT GAMES, AND THEN CLUE ROUTES WILL PULL UP ALL QUESTIONS
// // router.get('/gameyear/:year', getGamesByYear) // gets all games in specified year
// // router.get('/gameseason/:season', getGamesBySeason) // gets all games in specified season
// // router.get('/onegame', getOneGame)
// // // // ROUTES FOR MISSEDCLUES
// // router.post('/missedClue/create', createMissedClue) // creates a MissedClue doc
// // // router.get('/missedClue/')


module.exports = router
