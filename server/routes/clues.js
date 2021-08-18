const express = require("express");

const { getCluesById } = require("../controllers/clues.js")



const router = express.Router();

// router.get('/game/:id', getClues) 

router.get('/game/:id', getCluesById)
// router.get('game/')

// router.post('/', createMissedClue) 

module.exports = router
