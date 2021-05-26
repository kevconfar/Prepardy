const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI)

// const gamesSchema = require("../model/clues.model")
const cluesSchema = require("../model/games.model")

// const Game = mongoose.model("Games", gamesSchema)

const conn = mongoose.createConnection(process.env.MONGODB_URI);
const Clue = conn.model('Clues', cluesSchema, "Clues"); // changed collection from "clues"
// // // conn.model('Clues', cluesSchema);

module.exports = Clue

