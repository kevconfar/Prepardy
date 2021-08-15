// const Clue = require("./connections/clues.js")

// // var x = Clue.findOne({'answer':'Coffee'})

// // console.log(x)



// const query = Clue.where({ answer: 'Coffee' });
// query.findOne(function (err, clue) {
//     if (err) return handleError(err);
//     if (clue) {
//         console.log(clue)
//         // doc may be null if no document matched
//     }
// });

const Clue = require("./connections/clues.js")
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

// mongoose.createConnection(process.env.MONGODB_URI)


// const clueArr = []


// function clueBy

// const arr = []

// const query = Clue.where({ answer: 'Coffee' });
// query.find(function (err, clue) {
//     if (err) return handleError(err);
//     if (clue) {
//         clue.forEach(x => arr.push(x))
//         // doc may be null if no document matched
//     }
// })


// console.log(arr)


// const res = await Clue.find({ answer: 'Coffee' })

// console.log(res)


// const x = Clue.find({ answer: 'coffee' })

// // console.log(x)

// const arr = []

// function clueHandler(num) {
//     return new Promise(resolve => {


      
//     });
// }



// function handleClue(input) {
//     resolve(input)
// }

// async function sameAnswer(text) {
//     const docs = await Clue.find({answer: `${text}`});
//     handleClue(docs)
// }

// const x = sameAnswer("Coffee");

// console.log(x)
// console.log(sameAnswer("Coffee"))

// console.log(x)





// SOLUTION # 1 
// const tester = async (input) => {

//     return Clue.find({answer: `${input}`})
// }

// tester("Coffee").then(value => console.log(value)) // returns array of clues with answer "Coffee"
// SOLUTION # 1




// SOLUTION # 2
console.log("\n", "----------------------------------------------------------------------")
// const x = async _=> {
//     var doc = await Clue.find()
    
// }
function resolveAfter2Seconds(input) {
    return new Promise(resolve => {
        setTimeout(() => {
            const doc = Clue.find(input) // NEW CODE
            resolve(doc); // was resolve(input)
        }, 2000);
    });
}

async function asyncCall(input) {
    const result = resolveAfter2Seconds({answer: `${input}`}); // "Coffee"
    return result
}

const testx = asyncCall.call(null, "Coffee")

console.log(testx)

// asyncCall()

// const z = async _=> await asyncCall().then(value)

// console.log(z.)

// SOLUTION # 2