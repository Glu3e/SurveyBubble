/*
FileName: api.js
Author(s): Kevin Cornejo-Andrade, Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: mongo and local connections 
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();

// define the game model
let game = require('../models/surveys');

// require the users controller for authentication
let usersController = require('../controllers/users');

// require the api controller to access games collection
let apiController = require('../controllers/api');

/* GET games List - READ */
router.get('/', usersController.RequireAuth, (req, res, next) => {
  apiController.ReadGameList(req, res);
});

router.get('/surveys', usersController.RequireAuth, (req, res, next) => {
  apiController.ReadGameList(req, res);
});

// CREATE
router.get('/surveys/add', usersController.RequireAuth, (req, res, next) => {
  apiController.GetGameById(req, res);
}).post('/surveys/add', usersController.RequireAuth, (req, res, next) => {
  // POST process the Game Details page and create a new Game - CREATE
  apiController.CreateGame(req, res);
});

// GET the Game Details page in order to edit a new Game
router.get('/surveys/:id', usersController.RequireAuth, (req, res, next) => {
  apiController.GetGameById(req, res);
}).post('/surveys/:id', usersController.RequireAuth, (req, res, next) => {
  // POST - process the information passed from the details form and update the document
  apiController.UpdateGame(req, res);
});

// GET - process the delete by user id
router.get('/surveys/delete/:id', usersController.RequireAuth, (req, res, next) => {
  apiController.DeleteGame(req, res);
});

module.exports = router;
