let mongoose = require('mongoose');

// define the game model
let survey = require('../models/surveys');

// Read and display the Game List
module.exports.ReadSurveyList = (req, res) => {
  // find all games in the games collection
  survey.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('surveys/index', {
        title: 'Surveys',
        surveys: surveys,
        displayName: req.user.displayName
      });
    }
  });
}

// displays the Details page - allowing users to add a new Game
module.exports.DisplayAdd = (req, res) => {
  res.render('surveys/details', {
    title: "Short Answer Survey",
    surveys: '',
    displayName: req.user.displayName
  });
}
// change this to fit the survey site
// Create a new game and insert it into the db
module.exports.CreateSurvey = (req, res) => {
  
  let currentDate = new Date();
  currentDate = currentDate.toLocaleDateString();
  
  let newSurvey = survey({
      surveyTitle: req.body.surveyTitle,
      submittedBy: req.body.displayName,
      startDate: currentDate,
      endDate: req.body.endDate,
      questionTitle: req.body.questionTitle,
      optionA: req.body.optionA
      
      
    });

    survey.create(newSurvey, (err, survey) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        res.redirect('/surveys');
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
          res.render('surveys/details', {
              title: 'survey Details',
              surveys: surveys,
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
       "_id": id,
      "surveyTitle": req.body.surveyTitle,
      "submittedBy": req.body.submittedBy,
      "startDate": req.body.startDate,
      "endDate": req.body.endDate,
      "questions": req.body.questions,
      "shortAns": req.body.shortAns
    });

    survey.update({_id: id}, updatedSurvey, (err) => {
      if(err) {
        console.log(err);
        res.end(err);
      } else {
        // refresh the game List
        res.redirect('/surveys');
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
        res.redirect('/Surveys');
      }
    });
}
