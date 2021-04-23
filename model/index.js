const mongoose = require("mongoose");  // connects node.js env with mongodb server

const cheerio = require("cheerio");
const axios = require("axios");


mongoose.connect("mongodb://localhost:27017/Prepardy", { useNewUrlParser: true }, (error) => {
    if (!error) {
        console.log("Success Connected");
    } 
    else {
        console.log("Error connecting to database." + error)
    }
});


const Clue = require("./clues.model");


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


async function urlFeeder(seasonNum) {
    var urls = await seasonUrls(seasonNum);

    // var gameId = url.substring(url.length - 4)
    urls.forEach(url => fetchGameData(url.substring(url.length - 4)))
}


const fetchGameData = gameId => {
    return axios
        .get(`http://www.j-archive.com/showgame.php?game_id=${gameId}`)
        .then(({ data }) => {
            const $ = cheerio.load(data);
            
            // populates the categories array with category names
            const categories = [];
            $(".category_name").each(function () {
                categories.push($(this).text());
            });
            // assigns the game "Show #" as gameTitle
            var gameTitle = ($("#game_title > h1").text()).substring(6, 10)
            // urlId used to identify errors
            // var urlId = gameUrl.substring(gameUrl.length - 4)


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
                
                newClue.gameID = gameTitle
                newClue.question = cheerio(".clue_text", elem).html();

                // let answer;
                if (i < 60) {
                    const mouseOverContent = cheerio("div", elem).attr("onmouseover");
                    newClue.answer = cheerio(".correct_response", mouseOverContent).text();
                } else if (i === 60) {
                    const mouseOverContent = $(".final_round div").attr("onmouseover");
                    newClue.answer = cheerio("em", mouseOverContent).text();
                }
                
                newClue.save(function (err) {
                        if (err) return handleError(err);
                })
                

            });
        })
        .catch(() => {
            console.log("GAME ERROR", gameId);
        });
}

// var newestFirst = season_nums.reverse()[0:5]
 
// for (num in testArr) {
//     console.log("--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--===--==--==-==--")
//     console.log(`                                  SCRAPING SEASON NO. ${num}`)
//     console.log("--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--===--==--==-==--")
    
//     urlFeeder(num)
// }





//21 not seeming to add
// 22 fishy
// urlFeeder(37)

// for (num in testArr) {
    // console.log("--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--===--==--==-==--")
    // console.log(`                                  SCRAPING SEASON NO. ${num}`)
    // console.log("--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--==--===--==--==-==--")

//     urlFeeder(num)
// }
