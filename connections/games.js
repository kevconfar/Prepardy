const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI)

const gamesSchema = require("../model/games.model")
// const cluesSchema = require("../model/games.model")

// const Game = mongoose.model("Games", gamesSchema)

const conn = mongoose.createConnection(process.env.MONGODB_URI);
const Game = conn.model('Games', gamesSchema, "games");
// // // conn.model('Clues', cluesSchema);

module.exports = Game

