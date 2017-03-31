let mongoose = require('mongoose');
//change this to survey Schema
// create a model class
let gamesSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "games"
});

module.exports = mongoose.model('games', gamesSchema);
