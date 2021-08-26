const MissedClue = require("./connections/missedClues.js")
const Clue = require("./connections/clues.js")


// const missedClue = new MissedClue({
//     autoTags: ["Roman", "Marcus Aurelius"],
//     userTags: ["History", "1012 AD", "Rome"],
//     person: "Marcus Aurelius",
//     userAnswer: "Burt Reynolds"
// })


// MissedClue.insert(missedClue);

// new MissedClue({
//     autoTags: ["Greek", "Hercules"],
//     userTags: ["History", "1012 AD", "Rome"],
//     person: "Marcus Aurelius",
//     userAnswer: "Burt Reynolds",
//     person: "Kevin Farley",
//     topic: "History",
//     year: "2019",
//     location: "United States"
// }).save()

// new MissedClue({
    // autoTags: ["Picasso", "Art"],
    // userTags: ["Picasso", "Painter", "Art"],
    // userAnswer: "Gwen Stefani",
//     person: "Pablo Picasso",
//     topic: "Art History",
//     year: "1905",
//     location: "France"
// }).save()

new MissedClue({
    autoTags: ["Tabby", "Denzy"],
    userTags: ["Cats", "Are", "Cool"],
    userAnswer: "Good Eating"
}).save()