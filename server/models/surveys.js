/*
FileName: surveys.js
Author(s): Kevin Cornejo-Andrade
WebSite: https://kevinexpress.herokuapp.com/
Description: short anwser schema
*/ 

let mongoose = require('mongoose');
//change this to survey Schema
// create a model class
let surveySchema = mongoose.Schema({
    surveyTitle: String,
    submittedBy: String,
    startDate: String,
    endDate: String,
    questionTitle: String,
    optionA: String,
    question: [{questionTitle: String, optionA: String}]
},
{
  collection: "surveys"
});

module.exports = mongoose.model('surveys', surveySchema);
