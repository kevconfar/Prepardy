const mongoose = require("mongoose");

// 5-13: Changed Scores type to Array from [Number]
// 5-17: Switched urlID and gameID type to Number

const gamesSchema = new mongoose.Schema({
    gameID: {
        type: Number,
        unique: true
        // required: true
    },
    urlID : {
        type: Number,
        unique: true
        // required: true
    },
    date : {
        type: String,
    },
    scores : {
        type: Array
    },
    season : {
        type: Number
    }
});

// module.exports = mongoose.model('Games', GamesSchema);
module.exports = gamesSchema



// var Game = mongoose.model('Games', GamesSchema);

// var Game = mongoose.model('Game', GamesSchema)
// const cheerio = require("cheerio");
// const axios = require("axios");

// mongoose.connect("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/Prepardy?retryWrites=true&w=majority", { useNewUrlParser: true }, (error) => {
//     if (!error) {
//         console.log("Success Connected");
//     }
//     else {
//         console.log("Error connecting to database." + error)
//     }
// });




// function seasonUrls(num) {
//     return new Promise(resolve => {
//         return axios
//             .get(`https://j-archive.com/showseason.php?season=${num}`)
//             .then(({ data }) => {
//                 const $ = cheerio.load(data);

//                 let links = []
//                 let url;
//                 $('a').each(function () {
//                     url = `${$(this).attr('href')}`
//                     if (url.includes("game_id")) {
//                         links.push(url)
//                     }
//                 });
//                 resolve(links)
//             })
//     });
// }


// async function urlFeeder(season) {

//     var urls = await seasonUrls(season);

//     // var gameId = url.substring(url.length - 4)
//     urls.forEach(url => fetchGameData(url.substring(url.length - 4)))
// }


// const fetchGameData = gameId => {
//     return axios
//         .get(`http://www.j-archive.com/showgame.php?game_id=${gameId}`)
//         .then(({ data }) => {
//             const $ = cheerio.load(data);

//             var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))
//             var urlId = parseInt(gameId)

//             var newGame = new Game({});
//             const airDateString = $("#game_title")
//                 .text()
//                 .split(" - ")[1];
//             function formatDate(date) {
//                 var d = new Date(date),
//                     month = '' + (d.getMonth() + 1),
//                     day = '' + d.getDate(),
//                     year = d.getFullYear();

//                 if (month.length < 2)
//                     month = '0' + month;
//                 if (day.length < 2)
//                     day = '0' + day;

//                 return [month, day, year].join('-');
//             }
//             newGame.date = formatDate(airDateString) // GAME.DATE = "dd/mm/yy"
//             newGame.scores = []

//             var arr = []

//             const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
//             scores.each(function (i, elem) {
//                 var x = cheerio(".score_positive", elem).text().split("$").join(" ").trim().split(" ")
//                 var arr = []
//                 x.forEach(str => arr.push(parseInt(str.replace(",", ""))))
//                 arr.sort(function (a, b) {
//                     return a - b;
//                 });
//                 // newGame.scores.concat(arr) // GAME.SCORES = [ 2500, 19700, 41000 ] with order: least -> greatest
//             })

//             newGame.scores = arr
//             newGame.gameID = gameTitle // GAME.GAMEID = 8377
//             newGame.urlID = urlId // GAME.URL ID = 6962

//             newGame.save(function (err) {
//                 if (err) return handleError(err);
//             })


//         })
//         // .catch(() => {
//         //     console.log("GAME ERROR", gameId);
//         // });
// }

// urlFeeder(10)