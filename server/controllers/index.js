// Display the Home Page
module.exports.DisplayHome = (req, res) => {
  res.render('content/index', {
    title: 'Survey Bubble',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}

// Displays the Contact Page
module.exports.DisplayContact = (req, res) => {
  res.render('content/Search', {
    title: 'Search',
    games: '',
    displayName: req.user ? req.user.displayName : ''
   });
}
