const Clue = require('../model/clues.model')



getClues = async (req, res) => {
    await Clue.find({}, (err, clues) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!clues.length) {
            return res
                .status(404)
                .json({ success: false, error: `Clue not found` })
        }
        return res.status(200).json({ success: true, data: clues })
    }).catch(err => console.log(err))
}


const fullGame = (gameID) => {
    g
}

console.log()


