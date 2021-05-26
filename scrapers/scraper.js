const cheerio = require("cheerio");
const axios = require("axios");
const mongoose = require("mongoose")

/* IMPROVEMENTS TO ADD:
    - if newClue.includes("&amp;") {
        newClue.replace("&amp;", "and")
      }

    -  


*/






// mongoose.connect("mongodb+srv://kevin:jepprepKevin@prepardy.u8adi.mongodb.net/Prepardy?retryWrites=true&w=majority", { useNewUrlParser: true }, (error) => {
//     if (!error) {
//         console.log("Success Connected");
//     }
//     else {
//         console.log("Error connecting to database." + error)
//     }
// });


const Clue = require("../connections/clues")

// const Clue = require("../model/clues.model");
// const db = require("./db/index.js")
// const Game = require("./games.model")

// db.connect()


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
    // urls.forEach(url => fetchGameData(url.substring(url.length - 4)))
    urls.forEach(url => fetchGameData(url))

}


const fetchGameData = gameUrl => {
    return axios
        // .get(`http://www.j-archive.com/showgame.php?game_id=${gameId}`)
        .get(gameUrl)
        .then(({ data }) => {
            const $ = cheerio.load(data);

            // populates the categories array with category names
            const categories = [];
            $(".category_name").each(function () {
                categories.push($(this).text());
            });
            // assigns the game "Show #" as gameTitle
            // var gameTitle = ($("#game_title > h1").text()).substring(6, 10)
            // urlId used to identify errors
            // var urlId = gameUrl.substring(gameUrl.length - 4)
            const urlIdRegex = /(.+game_id=)([0-9]+)/; // gameID will be match[2]
            const urlIdMatch = gameUrl.match(urlIdRegex)
            const urlId = parseInt(urlIdMatch[2])

            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))
            // var urlId = parseInt(gameId)

            // GAME DOCUMENT CREATION -------------
            // var newGame = new Game({});
            // const airDateString = $("#game_title")
            //     .text()
            //     .split(" - ")[1];
            // function formatDate(date) {
            //     var d = new Date(date),
            //         month = '' + (d.getMonth() + 1),
            //         day = '' + d.getDate(),
            //         year = d.getFullYear();

            //     if (month.length < 2)
            //         month = '0' + month;
            //     if (day.length < 2)
            //         day = '0' + day;

            //     return [month, day, year].join('-');
            // }
            // newGame.date = formatDate(airDateString) // GAME.DATE = "dd/mm/yy"

            // const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
            // scores.each(function (i, elem) {
            //     var x = cheerio(".score_positive", elem).text().split("$").join(" ").trim().split(" ")
            //     var arr = []
            //     x.forEach(str => arr.push(parseInt(str.replace(",", ""))))
            //     arr.sort(function (a, b) {
            //         return a - b;
            //     });
            //     newGame.scores = arr // GAME.SCORES = [ 2500, 19700, 41000 ] with order: least -> greatest
            // })

            // newGame.gameID = gameTitle // GAME.GAMEID = 8377
            // newGame.urlID = urlId // GAME.URL ID = 6962

            // newGame.save(function (err) {
            //     if (err) return handleError(err);
            // })

            $(".clue").each(function (i, elem) {
                // Calculate category and value based off of index of clue
                var newClue = new Clue({});
                if (i < 30) {
                    newClue.category = categories[i % 6]
                    newClue.value = Math.floor(i / 6 + 1) * 200;
                } else if (i < 60) {
                    newClue.category = categories[i % 6 + 6];
                    newClue.value = Math.floor((i - 30) / 6 + 1) * 400;
                } else if (i === 60) {
                    newClue.category = categories[12];
                }
                // if (gameTitle !== "") {
                //     newClue.gameID = gameTitle
                // } else {
                //     newClue.gameID = gameId
                // }
                newClue.gameID = gameTitle
                newClue.urlID = urlId
                newClue.question = cheerio(".clue_text", elem).html();

                if (i < 60) {
                    const mouseOverContent = cheerio("div", elem).attr("onmouseover");
                    newClue.answer = cheerio(".correct_response", mouseOverContent).text();
                } else if (i === 60) {
                    const mouseOverContent = $(".final_round div").attr("onmouseover");
                    newClue.answer = cheerio("em", mouseOverContent).text();
                }

                // console.log(newClue)
                // conditional statement to filter out blank questions
                // newClue.save(function (err) {
                //     if (err) return handleError(err);
                // })
                newClue.save()


                // async function saveGame() {
                //     const result = await newClue.save();
                //     console.log(result);
                // }

                // saveGame()



            });
        })
        // .catch(() => {
        //     console.log("GAME ERROR", gameId);
        // });
}

urlFeeder(37)

// 24 weird
// only 1116 scraped from 26, 117801 - 116685
// 31 glitched out
// 33 ok, but glitched at end

// fetchGameData()



//35 is shit
//184949 - 189688

//36 201728