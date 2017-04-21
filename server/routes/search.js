/*
FileName: search.js
Author(s): Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: Search routes
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();

// define the game model
let survey = require('../models/msurveys');

// require the search controller
let searchController = require('../controllers/search');

/* GET search page. */
router.get('/', (req, res, next) => {
  searchController.DisplaySearch(req, res);
});

/* GET games List page. READ */
router.get('search/results', (req, res, next) => {
  searchController.ReadSurveyList(req, res);
}).post('search/results', (req, res, next) => {
  searchController.ReadSurveyList2(req, res);
});

/*//  GET the Game Details page in order to add a new Game
router.get('/add', usersController.RequireAuth, (req, res, next) => {
  surveysController.DisplayAdd(req, res);
}).post('/add', usersController.RequireAuth, (req, res, next) => {
  // POST process the Game Details page and create a new Game - CREATE
  surveysController.CreateSurvey(req, res);
});*/ 

router.get('/results/:id', (req, res, next) => {
  searchController.DisplaySurvey(req, res);
});

module.exports = router;