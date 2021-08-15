// USE IMPORTED GAMESCHEMA TO CREATE AND EXPORT GAME MODELS FOR DOCUMENT CREATION AND ACCESS

const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI)

const gamesSchema = require("../model/games.model")


const conn = mongoose.createConnection(process.env.MONGODB_URI);
const Game = conn.model('Games', gamesSchema, "Games");

module.exports = Game

