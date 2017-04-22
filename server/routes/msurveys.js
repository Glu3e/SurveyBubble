/*
FileName: msurveys.js
Author(s): Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: mult choice crud routes
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let mongo = require('mongodb').MongoClient;
let assert = require('assert');

// define the game model
let survey = require('../models/msurveys');

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the games controller to access games collection in findById
let surveysController = require('../controllers/msurveys');

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

mongo.connect('mongodb://kev:qweasd@ds054999.mlab.com:54999/videogames-kevin', (err, database) => {
  if (err) return console.log(err)
  db = database
})

router.get('/msurveys', (req,res) => {
  //when live switch to live db
  var cursor = db.collection('msurveys').find();
  db.collection('msurveys').find().toArray((err, results) => {
    if(err) return console.log(err)
    res.render('index', {msurveys: result})
  })  
});
  




module.exports = router;
