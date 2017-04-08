let mongoose = require('mongoose');
//change this to survey Schema
// create a model class
let surveySchema = mongoose.Schema({
    surveyTitle: String,
    submittedBy: String,
    startDate: String,
    endDate: String,
    questions: String,
    shortAns: String
},
{
  collection: "surveys"
});

module.exports = mongoose.model('surveys', surveySchema);
