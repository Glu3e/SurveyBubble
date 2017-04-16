/*
FileName: index.js
Author(s): Kevin Cornejo-Andrade, Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: home routes no need to be registered user 
*/ 

// modules required for routing
let express = require('express');
let router = express.Router();

// require the index controller
let indexController = require('../controllers/index');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  indexController.DisplayHome(req, res);
});

module.exports = router;
