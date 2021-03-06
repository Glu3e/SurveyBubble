/*
FileName: msurveys.js
Author(s): Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: survey search page
*/ 

let mongoose = require('mongoose');

// define the survey model
let survey = require('../models/msurveys');

// Displays the Search Page
module.exports.DisplaySearch = (req, res) => {
  res.render('search/index', {
    title: 'Search',
    msurveys: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Read and display the Game List
module.exports.ReadSurveyList = (req, res) => {
  // find all games in the games collection
  let submitted;

  survey.find( (err, surveys) => {

    if (err) {
      return console.error(err);
    }
    else {
      res.render('search/results', {
        title: 'Survey Search Results',
        msurveys: surveys,
        displayName: req.user ? req.user.displayName : '',
        submitted: req.body.submittedBy
      });
    }
  });//.$where('submittedBy === Selina Daley').exec();
  //or([{surveyTitle: req.body.name},{submittedBy: 'Selina Daley'}]);
  //where([{submittedBy: 'Selina Daley'}]).all([]);
  //.or([{submittedBy: 'Selina Daley'}]);
};

module.exports.ReadSurveyList2 = (req, res, next) => {
    survey.find((err, surveys) => {
    
    if (err) {
      console.log(err);
        res.end(err);
    }
    else {
      res.redirect('search/results');
    }

    });
};

module.exports.DisplaySurvey = (req, res) => {
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
          res.render('search/details', {
              title: 'Complete the Survey',
              msurveys: surveys,
              displayName: req.user ? req.user.displayName : ''
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.redirect('/errors/404');
    }
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