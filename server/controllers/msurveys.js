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
      res.render('msurveys/index', {
        title: 'M Surveys',
        msurveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
}

// displays the Details page - allowing users to add a new Game
module.exports.DisplayAdd = (req, res) => {
  res.render('msurveys/details', {
    title: "Add a new survey",
    msurveys: '',
    displayName: req.user.displayName 
  });
}
// change this to fit the survey site
// Create a new game and insert it into the db
module.exports.CreateSurvey = (req, res) => {

// global route variables
let currentDate = new Date();
currentDate = currentDate.toLocaleDateString();

  let newSurvey = survey({
      surveyTitle: req.body.surveyTitle,
      submittedBy: req.user.displayName,
      startDate: currentDate,
      endDate: req.body.endDate, 
      question: [{questionTitle: req.body.questionTitle0, optionA: req.body.optionA0, optionB: req.body.optionB0, optionC: req.body.optionC0, optionD: req.body.optionD0}, 
                 {questionTitle: req.body.questionTitle1, optionA: req.body.optionA1, optionB: req.body.optionB1, optionC: req.body.optionC1, optionD: req.body.optionD1},
                 {questionTitle: req.body.questionTitle2, optionA: req.body.optionA2, optionB: req.body.optionB2, optionC: req.body.optionC2, optionD: req.body.optionD2},
                 {questionTitle: req.body.questionTitle3, optionA: req.body.optionA3, optionB: req.body.optionB3, optionC: req.body.optionC3, optionD: req.body.optionD3},
                 {questionTitle: req.body.questionTitle4, optionA: req.body.optionA4, optionB: req.body.optionB4, optionC: req.body.optionC4, optionD: req.body.optionD4}]   
    });

    survey.create(newSurvey, (err, survey) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/msurveys');
      }
    });
}

// Displays the Details page to Update a Game
// find the game by id and populate the form
module.exports.DisplayEdit = (req, res) => {
  try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one game by its id
      survey.findById(id, (err, surveys) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
          // show the game details view
          res.render('msurveys/details2', {
              title: 'msurvey Details',
              msurveys: surveys,
              displayName: req.user.displayName
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }
}

// Update an existing Game in the games collection
module.exports.UpdateSurvey = (req, res) => {
  // get a reference to the id from the url
    let id = req.params.id;

     let updatedSurvey = survey({

      _id : id,
      surveyTitle: req.body.surveyTitle,
      submittedBy: req.user.displayName,
      endDate: req.body.endDate, 
      question: [{questionTitle: req.body.questionTitle0, optionA: req.body.optionA0, optionB: req.body.optionB0, optionC: req.body.optionC0, optionD: req.body.optionD0}, 
                 {questionTitle: req.body.questionTitle1, optionA: req.body.optionA1, optionB: req.body.optionB1, optionC: req.body.optionC1, optionD: req.body.optionD1},
                 {questionTitle: req.body.questionTitle2, optionA: req.body.optionA2, optionB: req.body.optionB2, optionC: req.body.optionC2, optionD: req.body.optionD2},
                 {questionTitle: req.body.questionTitle3, optionA: req.body.optionA3, optionB: req.body.optionB3, optionC: req.body.optionC3, optionD: req.body.optionD3},
                 {questionTitle: req.body.questionTitle4, optionA: req.body.optionA4, optionB: req.body.optionB4, optionC: req.body.optionC4, optionD: req.body.optionD4}]
    });

    survey.update({_id: id}, updatedSurvey, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the game List
        res.redirect('/msurveys');
      }
    });
}

// Deletes a game from the games collection
module.exports.DeleteSurvey = (req, res) => {
    // get a reference to the id from the url
    let id = req.params.id;

    survey.remove({_id: id}, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the games list
        res.redirect('/msurveys');
      }
    });
}
