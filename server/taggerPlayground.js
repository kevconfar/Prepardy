const MissedClues = require("./connections/missedClues.js")
const Clues = require("./connections/clues.js")


// const arr = Clues.findOne({answer: "Coffee"})


const tester = async (input) => {

    return Clues.find({ answer: `${input}` })
}


const clueArr = []

tester("Coffee").then( value => await clueArr.push(value))

console.log(clueArr)

// const capsFinder = (input) => {

//     let reg = /\s?([A-Z][a-z]+/
    
    
// }