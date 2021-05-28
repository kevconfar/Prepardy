const mongoose = require("mongoose");
const cheerio = require("cheerio");
const axios = require("axios");

const Game = require("../connections/games")



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

var season_nums = [...Array(38).keys()];


async function urlFeeder(season) {

    var urls = await seasonUrls(season);

    urls.forEach(url => fetchGameData(url, season))
}


const fetchGameData = (gameUrl, season) => {
    return axios
        .get(gameUrl)
        .then(({ data }) => {
            const $ = cheerio.load(data);
 
            var gameTitle = parseInt(($("#game_title > h1").text()).substring(6, 10))

            const urlIdRegex = /(.+game_id=)([0-9]+)/; // gameID will be match[2]
            const urlIdMatch = gameUrl.match(urlIdRegex)
            const urlId = parseInt(urlIdMatch[2])

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

            const seasonNum = season


            var scoresArr = []

            const scores = $("#final_jeopardy_round > table:nth-child(4) > tbody")
            scores.each(function (i, elem) {
                var x = cheerio(".score_positive", elem).text().split("$").join(" ").trim().split(" ")
                // var scoresArr = []
                x.forEach(str => scoresArr.push(parseInt(str.replace(",", ""))))
                scoresArr.sort(function (a, b) {
                    return a - b;
                });
            })

            new Game({
                gameID: gameTitle,
                urlID: urlId,
                date: formatDate(airDateString),
                season: seasonNum,
                scores: scoresArr
            }).save()

        })
        .catch(() => {
            console.log("GAME ERROR", gameUrl);
        });

}

// urlFeeder(37)