/*
FileName: msurveys.js
Author(s): Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: multiple choice schema
*/ 

let mongoose = require('mongoose');

// create a model class
let msurveySchema = mongoose.Schema({
    surveyTitle: String,
    submittedBy: String,
    startDate: String,
    endDate: String,    

    question: [{questionTitle: String, optionA: String, optionB: String, optionC: String, optionD: String},
               {questionTitle: String, optionA: String, optionB: String, optionC: String, optionD: String},
               {questionTitle: String, optionA: String, optionB: String, optionC: String, optionD: String},
               {questionTitle: String, optionA: String, optionB: String, optionC: String, optionD: String},
               {questionTitle: String, optionA: String, optionB: String, optionC: String, optionD: String}]    
},
{
  collection: "msurveys"
});

module.exports = mongoose.model('msurveys', msurveySchema);
