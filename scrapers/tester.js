// const mongoose = require("mongoose")

// const Game = require("../connections/games")

// const axios = require("axios")
// const cheerio = require("cheerio")



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

// // array of numbers (one for each season) to be passed into urlPasser
// var season_nums = [...Array(38).keys()];




// async function urlFeeder(season) {

//     var urls = await seasonUrls(season);
//     // var gameId = url.substring(url.length - 4)
//     // urls.forEach(url => fetchGameData(url.substring(url.length - 4)))
//     urls.forEach(url => fetchGameData(url))

// }


// const fetchGameData = gameUrl => {
//     return axios
//         // .get(`http://www.j-archive.com/showgame.php?game_id=${gameId}`)
//         .get(gameUrl)
//         .then(({ data }) => {
//             const $ = cheerio.load(data);

//             const urlIdRegex = /(.+game_id=)([0-9]+)/; // gameID will be match[2]
//             const urlIdMatch = gameUrl.match(urlIdRegex)
//             const urlId = parseInt(urlIdMatch[2])

//             // console.log(urlId)


//             // const newGame = new Game({}); 

//             var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))
//             // console.log(gameTitle)
//             // var urlId = gameId

//             // const printer = {"gameID": gameTitle, "urlID": urlId}
//             // console.log(printer)

//             // // const newGame = new Game({});
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
            
//             const airDate = formatDate(airDateString)
 
//             var arr = []

//             const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
//             scores.each(function (i, elem) {
//                 var x = cheerio(".score_positive", elem).text().split("$").join(" ").trim().split(" ")
//                 // var arr = []
//                 x.forEach(str => arr.push(parseInt(str.replace(",", ""))))
//                 arr.sort(function (a, b) {
//                     return a - b;
//                 });
//                 // newGame.scores.concat(arr) // GAME.SCORES = [ 2500, 19700, 41000 ] with order: least -> greatest
//             })

//             // console.log({"urlID":urlId, "scores":arr})

//             async function saveGame() {
//                 const gameObj = new Game({
//                     gameID: gameTitle,
//                     urlID: urlId,
//                     date: airDate,
//                     scores: arr
//                 })

//                 const result = await gameObj.save();
//                 console.log(result);
//             }

//             saveGame()





//             // const game = { 
//             //     gameID: gameTitle,
//             //     urlID: urlId,
//             //     date: airDate,
//             //     scores: arr
//             // }

//             // saveGame(game)

//         })
  


// }

// // 15 errored out

// urlFeeder("20")


