let mongoose = require('mongoose');

// define the game model
let survey = require('../models/surveys');

// Read and display the Game List
module.exports.ReadSurveyList = (req, res) => {
  // find all games in the games collection
  ReadSurveyList.find( (err, surveys) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.status(200).json(surveys);
      
      res.status(200).json({
        title: 'Surveys',
        surveys: surveys,
        displayName: req.user.displayName
      });
      
    }
  });
}

// Create a new game and insert it into the db
module.exports.CreateSurvey = (req, res) => {
  let newSurvey = survey({
      "surveyTitle": req.body.surveyTitle,
      "submittedBy": req.body.submittedBy,
      "startDate": req.body.startDate,
      "endDate": req.body.endDate,
      "questions": req.body.questions,
      "shortAns": req.body.shortAns
    });

    survey.create(newSurvey, (err, survey) => {
      if(err) {
        console.log(err);
        res.status(500).end(err);
      }
    });
}

module.exports.GetSurveyById = (req, res) => {
  try {
      // get a reference to the id from the url
      let id = mongoose.Types.ObjectId.createFromHexString(req.params.id);

        // find one game by its id
      survey.findById(id, (err, surveys) => {
        if(err) {
          console.log(err);
          res.end(error);
        } else {
          res.status(200).json({
              title: 'Survey Details',
              surveys: surveys,
              displayName: req.user.displayName
          });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).redirect('/errors/404');
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
      }
    });
}
