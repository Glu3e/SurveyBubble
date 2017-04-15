/*
FileName: survey.js
Author(s): Kevin Cornejo-Andrade
WebSite: https://kevinexpress.herokuapp.com/
Description: short answer crud routes
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();

// define the game model
let survey = require('../models/surveys');

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the games controller to access games collection in findById
let surveysController = require('../controllers/surveys');

/* GET games List page. READ */
router.get('/', usersController.RequireAuth, (req, res, next) => {
  surveysController.ReadSurveyList(req, res);
});

//  GET the Game Details page in order to add a new Game
router.get('/add', usersController.RequireAuth, (req, res, next) => {
  surveysController.DisplayAdd(req, res);
}).post('/add', usersController.RequireAuth, (req, res, next) => {
  // POST process the Game Details page and create a new Game - CREATE
  surveysController.CreateSurvey(req, res);
});

// GET the Game Details page in order to edit a new Game
router.get('/:id', usersController.RequireAuth, (req, res, next) => {
  surveysController.DisplayEdit(req, res);
}).post('/:id', usersController.RequireAuth, (req, res, next) => {
  // POST - process the information passed from the details form and update the document
  surveysController.UpdateSurvey(req, res);
});

// GET - process the delete by user id
router.get('/delete/:id', usersController.RequireAuth, (req, res, next) => {
  surveysController.DeleteSurvey(req, res);
});

module.exports = router;
