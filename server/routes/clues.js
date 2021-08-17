const express = require("express");

const { getClues, createMissedClue, getGameById } = require("../controllers/clues.js")



const router = express.Router();

router.get('/', getClues) 
router.get('/', getGameById)

router.post('/', createMissedClue) 




export default router;
