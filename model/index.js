const mongoose = require("mongoose");        // connects node.js env with mongodb server

mongoose.connect("mongodb://localhost:27017/Prepardy", { useNewUrlParser: true }, (error) => {
    if (!error) {

        console.log("Success Connected");

    }
    else {

        console.log("Error connecting to database.")

    }
});

const Clue = require("./clue.model");