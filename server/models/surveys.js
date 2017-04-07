/** NEW SCHEMA 
 * Name : "name of survey "
 * questions: ""
 * answers: ""
 */ 

let mongoose = require('mongoose');
//change this to survey Schema
// create a model class
let surveySchema = mongoose.Schema({
    name: String,
    questionNum: Number,
    questions: String,
    answers: String,
    answerNum: Number
},
{
  collection: "surveys"
});

module.exports = mongoose.model('surveys', surveySchema);
