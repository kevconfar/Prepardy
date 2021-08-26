var Games = require('../connections/games')
var mongoose = require('mongoose') // required because maybe it gives access to mongoose shit?


exports.getAllGames = async (req, res) => { // GETS ALL GAMES

    const games = await Games.find({})
    // res.status(200).json(games);
    res.send(games)

}

exports.getGamesBySeason = async (req, res) => {   // GETS ALL GAMES IN A SEASON

    const games = await Games.find({ season: req.params.season })
    // res.send('IT WORKED')
    // res.status(200).json(games);
    res.send(games)

}

exports.getGameById = async (req, res) => {  // GETS 1 game by GameID
    const game = await Games.findOne({ gameID: req.params.id})
    console.log("/games/id/:id", game)
    res.send(game)
}

exports.getRandomGame = async (req, res) => {  // GETS 1 random Game where { played: false }
    const game = await Games.findOne({})
    // console.log("getRandomGame RESPONSE =>", game.gameID, getRandom)
    res.send(game)
    // res.status(200).json(games);
    // res.send(game)
}


// exports.getGamesByYear = async (req, res) => {
//     try {

//         const year = req.params['year']
//         const clues = await Games.find({ date: year })
//         res.status(200).json(clues);

//     } catch (error) {

//         console.log(`ERROR MESSAGE: ${error.message}`)

//         res.status(404).json({ message: error.message });
//     }
// }



// FIRST VERSION OF THE GAME CONTROLLERS
// // GETS GAME DOCS BY SEASON
// const getGamesBySeason = async (req, res) => {
//     try {

//         // const season = req.params.id
//         console.log(req.params.id)
//         const clues = await Games.find({ season: req.params.id })
//         console.log("THIS SHOULD BE WORKING")
//         res.send(clues)

//     } catch (error) {
//         console.log(`GamesBySeason ERROR:   ${error.message}`)
//         res.status(404).json({ message: error.message });
//     }
// }

// // GET ONE GAME
// const getOneGame = async (req, res) => {
//     try {

//         // const season = req.params.season
//         const clues = await Games.findOne()
//         res.status(200).json(clues);

//     } catch (error) {

//         res.status(404).json({ message: error.message });
//     }
// }