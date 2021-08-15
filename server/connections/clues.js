// USE IMPORTED CLUESCHEMA TO CREATE AND EXPORT CLUE MODELS FOR DOCUMENT CREATION AND ACCESS

const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI)

const cluesSchema = require("../model/clues.model")


const conn = mongoose.createConnection(process.env.MONGODB_URI);
const Clue = conn.model('Clues', cluesSchema, "Clues"); // changed collection from "clues"

module.exports = Clue

