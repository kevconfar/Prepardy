const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");



// mongoose.createConnection("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/Prepardy?retryWrites=true&w=majority", { useNewUrlParser: true }, (error) => {
//     if (!error) {
//         console.log("Success Connected");
//     }
//     else {
//         console.log("Error connecting to database." + error)
//     }
// });

const Clue = require("../connections/clues")


// const conn = mongoose.createConnection("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/Prepardy?retryWrites=true&w=majority")

// const Game = require("../connections/games.js")
// const GamesSchema = require("../model/games.model.js")

// const Game = mongoose.model('Game', GamesSchema)


// const models = require("../connections/games.js")
// const Game = require("S../model/games.model")
// const Game = mongoose.model("Games", require("../connections/games.js"));
// const Game = require("../connections/games")


// const newGame = new Game({
//     gameID: 1234,
//     urlID: 5678,
//     date: "12-01-20",
//     scores: [1200, 400, 9200]
// })


// newGame.save(function (err) {
//     if (err) return handleError(err);
// })


// console.log(tester)
// tester.save()

// new Game({
//     gameID: 1234,
//     urlID:5678,
//     date: "12-01-20",
//     scores: [1200, 6700, 25000]
// }).save()

// const models = conn.models
// const Game = models.Game

function seasonUrls(num) {
    return new Promise(resolve => {
        return axios
            .get(`https://j-archive.com/showseason.php?season=${num}`)
            .then(({ data }) => {
                const $ = cheerio.load(data);

                let links = []
                let url;
                $('a').each(function () {
                    url = `${$(this).attr('href')}`
                    if (url.includes("game_id")) {
                        links.push(url)
                    }
                });
                resolve(links)
            })
    });
}

// array of numbers (one for each season) to be passed into urlPasser
var season_nums = [...Array(38).keys()];


async function urlFeeder(season) {

    var urls = await seasonUrls(season);

    // var gameId = url.substring(url.length - 4)
    urls.forEach(url => fetchGameData(url.substring(url.length - 4)))
}


const fetchGameData = gameId => {
    return axios
        .get(`http://www.j-archive.com/showgame.php?game_id=${gameId}`)
        .then(({ data }) => {
            const $ = cheerio.load(data);

            // const newGame = new Game({});
 
            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))
            var urlId = parseInt(gameId)

            // const newGame = new Game({});
            const airDateString = $("#game_title")
                .text()
                .split(" - ")[1];
            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2)
                    month = '0' + month;
                if (day.length < 2)
                    day = '0' + day;

                return [month, day, year].join('-');
            }
            // newGame.date = formatDate(airDateString) // GAME.DATE = "dd/mm/yy"
            // newGame.scores = []

            var arr = []

            const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
            scores.each(function (i, elem) {
                var x = cheerio(".score_positive", elem).text().split("$").join(" ").trim().split(" ")
                // var arr = []
                x.forEach(str => arr.push(parseInt(str.replace(",", ""))))
                arr.sort(function (a, b) {
                    return a - b;
                });
                // newGame.scores.concat(arr) // GAME.SCORES = [ 2500, 19700, 41000 ] with order: least -> greatest
            })

            // const new

            // const newGame = new Game({
            //     gameID: gameTitle,
            //     urlID: urlId,
            //     date: formatDate(airDateString)
            // })


     
  

        })
        // .catch(() => {
        //     console.log("GAME ERROR", gameId);
        // });

}


urlFeeder("10")