// var db = require("./db/index.js");

// // var result;

// // db.collection('clues', function (err, collection) {
// //     result = collection.findOne({ "answer":'coffee' }) 
// // });

// // console.log(result)



// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/Prepardy", function (err, db) {

//     db.collection('clues', function (err, collection) {

//         collection.find({"answer":"coffee"}).toArray(function (err, items) {
//             if (err) throw err;
//             console.log(items);
//         });

//     });

// });


// const Class = require("./model/clues.model.js")

// const query = Class.findOne({ 'answer':"coffee" });

// // selecting the `name` and `occupation` fields
// query.select('question answer category');

// // execute the query at a later time
// query.exec(function (err, clue) {
//     if (err) return handleError(err);
    
//     console.log('%s %s is a %s.', clue.question, clue.answer,
//         clue.category);
// });

// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/Prepardy";


// var query = { answer : "coffee" }


// MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("Prepardy");
//     // var query = { answer: "coffee" };
//     dbo.collection("clues").find(query).toArray(function (err, result) {
//         if (err) throw err;
//         // console.log(result);
//         output.concat(result)
//         db.close();
//     });
// });


const mongoose = require("mongoose")

const dotenv = require('dotenv')
dotenv.config()

mongoose.createConnection(process.env.MONGODB_URI, function (err, db) {
    if (err) throw err;
    var query = { answer: "coffee" };
    db.collection("clues").find(query).toArray(function (err, result) {
        if (err) throw err;
        // console.log(result);
        output.concat(result)
        db.close();
    });

})