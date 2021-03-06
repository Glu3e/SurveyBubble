/*
FileName: index.js
Author(s): Kevin Cornejo-Andrade, Selina Daley
WebSite: https://kevinexpress.herokuapp.com/
Description: displaying of the following pages
*/ 

// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Survey Bubble',
    surveys: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

