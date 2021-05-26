const cheerio = require("cheerio");
const axios = require("axios");


const Clue = require("../connections/clues")

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
    urls.forEach(url => fetchGameData(url))
}

// takes in season num, index number of url, and creates interval


const fetchGameData = gameUrl => { // changed gameId to arr

    // for (url in gameArr) {
    // setTimeout( function () {

    return axios
        .get(gameUrl)
        .then(({ data }) => {

            const $ = cheerio.load(data);
            const clues = [];

            var counter = 0

            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))

            const urlIdRegex = /(.+game_id=)([0-9]+)/; // gameID will be match[2]
            const urlIdMatch = gameUrl.match(urlIdRegex)
            const urlId = parseInt(urlIdMatch[2])


            const categories = [];
            $(".category_name").each(function () {
                categories.push($(this).text());
            });

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

                const newClue = new Clue({
                    question: clue,
                    answer: answer,
                    category: category,
                    value: value,
                    gameID: gameTitle,
                    urlID: urlId
                }).save()

                var dashes = "-------------------------"
                if (counter === 61) {
                    console.log(`GAME ${urlId} SUCESSFULLY RECORDED`, dashes, "\n")
                }

            })


            // console.log(clues)
            // console.log(counter, gameTitle)

        })
    // .then(setTimeout(function () {console.log("Episode Recorded")}, 15000))
}

const seasons = [10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]
seasons.forEach(num => {
    urlFeeder(num)
    
})
