// USE IMPORTED missedClueSchema TO CREATE AND EXPORT missedClue MODELS FOR DOCUMENT CREATION AND ACCESS

const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI)

const missedClueSchema = require("../model/missedClues.model")


const conn = mongoose.createConnection(process.env.MONGODB_URI);
const MissedClue = conn.model('MissedClues', missedClueSchema, "MissedClues");

module.exports = MissedClue // changed to Uppercase on this one




