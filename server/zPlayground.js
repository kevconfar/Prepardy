// TEST WHETHER GAME DOCS CAN BE UPDATED WITH:  category: [String]

const Games = require("./connections/games")
const Clues = require("./connections/clues")

// new Games({urlID: 9999, gameID: 9999, scores: [9,9,99], date:"9-9-99", season: 9999}).save()


// const addGameCats = async () => {

//     await Games.findOneAndUpdate({gameID: 9999}, { categories: ['a','b','c','d'] });

// }

// addGameCats()


// NEW CODE BELOW


// const addGameCats = async () => {
//     const cats = await Games.find({})
//     cats.forEach(game => {
//         const
//     })
    

// }

// const c = async () => console.log((await Clues.find({gameID: 7539}).length))\



// const x = async () => {
//     var c = await Clues.findOne({answer: "Coffee"})
//     console.log(c)
//     var g = await Games.findOne({gameID: c.gameID})
//     console.log(g)
// }

// x()

// STARTING WITH SEASON 20
// async function updater() {
//     await Games.findOneAndUpdate({gameID: num}, {category:})

//     // GET CATEGORIES
//     const getCats = async (gId) => {
//         var clues = await Clues.find({gameID: gId})

//         var arr = []
//         clues.forEach(x => {
//             if (!arr.includes(x.category)) { 
//                 arr.push(x.category) 
//             }
//         }   
//     }

// }

    // games.forEach(game = async () => { 
    //     arr = []

    //     const c = await Clues.find({gameID: game.gameID})
    //     c.forEach(x => {
    //         if (arr.includes(x.category) == false) {
    //             arr.push(x.category)
    //         }
    //     })
        
    //     Games.findOneAndUpdate({ gameID: 9999 }, { categories: ['a', 'b', 'c', 'd'] });

    // })
    
// }

// const getCats = (clues) => {
//     arr = []
//     clues.forEach(x => {
//         if (!arr.includes(x.category)) { arr.push(x.category)}
//     }   
// }
// test()


// const cats = async (input) => {
//     var clues = await Clues.find({gameID: input}).distinct("category")
//     console.log(clues)
// }

// cats(7070)
// console.log(cats(7070))
// ADDED CATEGORY FIELDS TO EACH GAME DOC
const cats = async (game) => {
    var clues = await Clues.find({ gameID: game.gameID }).distinct("category") // grabs only unique "category"s
    if (clues != null) {
        await Games.findOneAndUpdate({gameID: game.gameID}, {categories: clues}) // updates only the one Game doc
    }
}


const addCats = async () => {
    var games = await Games.find({}) // queries all Games
    games.forEach(game => { 
        cats(game) // insert each game oj
    });
}

addCats() // execute addCats


