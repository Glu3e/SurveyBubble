/*
FileName: msurveys.js
Author(s): Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: survey creation page
*/ 

let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/msurveys');

// Read and display the Game List
module.exports.ReadSurveyList = (req, res) => {
  // find all games in the games collection
  survey.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('surveys/index', {
        title: 'M Surveys',
        msurveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
}