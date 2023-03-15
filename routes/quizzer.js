var express = require('express');
const connection = require('../db');
var bodyParser = require('body-parser');

var router = express.Router();
require('../db');


// Create quizzer page
router.get('/createquiz', (req, res) => {
    res.render('./quiz/createQuiz');
});


router.post('/createquizzer', (req, res) => {
    const quizName = req.body.quizName;
    const question = req.body.question;
    const rightAnswer = req.body.rightAnswer;
    const otherOption1 = req.body.otherOption1;
    const otherOption2 = req.body.otherOption2;
    const otherOption3 = req.body.otherOption3;

    connection.connect();

    var sql = `INSERT INTO quiz (id, quizName, question, rightAnswer, otherOptions1, otherOptions2, otherOptions3) VALUES (0,'${quizName}','${question}','${rightAnswer}','${otherOption1}','${otherOption2}','${otherOption3}')`
    
    connection.query(sql, function(err, res){
        if(err) throw err;
        res.render('./quiz/quizzer');
    });
});


// Quizzer page
router.get('/quizzer', (req, res) => {
    res.render('./quiz/quizzer');

    var quizzerSql = 'SELECT * FROM quiz';

    connection.query(quizzerSql, (err, res) => {
        if(err) throw err;
    });

});




module.exports = router;