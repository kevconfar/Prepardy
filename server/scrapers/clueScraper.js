const cheerio = require("cheerio");
const axios = require("axios");


const Clue = require("../connections/clues");
// const Game = require("../connections/games");
// const CluesSchema = require("../model/clues.model");

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
var seasonNums = [...Array(37).keys()];


async function urlFeeder(season) {

    var urls = await seasonUrls(season);

    // setTimeout(function () {
    //     // var urls = await seasonUrls(season);
    //     urls.forEach(url => fetchGameData(url))
    // }, 10000)

    // urls.forEach(setTimeout(function () {
    //     fetchGameData(url)
    // }), 15000);

    urls.forEach(function (url) {

        setTimeout(function () {
            fetchGameData(url)
        }, 10000);
    
    })


    
 
    // urls.forEach(url => fetchGameData(url))
}

// takes in season num, index number of url, and creates interval


const fetchGameData = gameUrl => { // changed gameId to arr

    // for (url in gameArr) {
    // setTimeout( function () {

    return axios
        .get(gameUrl)
        .then(({ data }) => {

            const $ = cheerio.load(data);

            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))

            const urlIdRegex = /(.+game_id=)([0-9]+)/; // gameID will be match[2]
            const urlIdMatch = gameUrl.match(urlIdRegex)
            const urlId = parseInt(urlIdMatch[2])


            const categories = [];
            $(".category_name").each(function () {
                categories.push($(this).text());
            });

            const clueArr = []

            $(".clue").each(function (i, elem) {

                let category;
                let value;
                if (i < 30) {
                    category = categories[i % 6];
                    value = Math.floor(i / 6 + 1) * 200;
                } else if (i < 60) {
                    category = categories[i % 6 + 6];
                    value = Math.floor((i - 30) / 6 + 1) * 400;
                } else if (i === 60) {
                    category = categories[12];
                }



                const clue = cheerio(".clue_text", elem).html();
                
                let answer;
                if (i < 60) {
                    const mouseOverContent = cheerio("div", elem).attr("onmouseover");
                    answer = cheerio(".correct_response", mouseOverContent).text();
                } else if (i === 60) {
                    const mouseOverContent = $(".final_round div").attr("onmouseover");
                    answer = cheerio("em", mouseOverContent).text();
                }

                clueArr.push(new Clue({
                    question: clue,
                    answer: answer,
                    category: category,
                    value: value,
                    gameID: gameTitle,
                    urlID: urlId

                }))

            })

            Clue.insertMany(clueArr)


        })
        .catch(() => {
            console.log("GAME ERROR", gameUrl);
        });
}



// urlFeeder(32)

