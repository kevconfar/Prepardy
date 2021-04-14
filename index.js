// const mongoose = require("mongoose");// connects node.js env with mongodb server

// mongoose.connect("mongodb://localhost:27017/Prepardy", { useNewUrlParser: true }, (error)=>{
//     if (!error) {
        
//         console.log("Success Connected");

//     }
//     else {

//         console.log("Error connecting to database.")
             
//     }
// });

// mongoose.connect('mongodb://localhost:27017/Prepardy', { useNewUrlParser: true }).
//     catch(error => handleError(error));


const connection = require("./model");
const express = require("express");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlears");
const bodyparser = require("body-parser");

app.use(bodyparser.urlenocoded({
    extended : true
}));

app.get("/", (req, res)=>{
    res.send('<h1>Hello World!<h1>')
})


// const mongoose = require("mongoose");        // connects node.js env with mongodb server

// mongoose.connect("mongodb://localhost:27017/Prepardy", { useNewUrlParser: true }, (error) => {
//     if (!error) {

//         console.log("Success Connected");

//     }
//     else {

//         console.log("Error connecting to database.")

//     }
// });