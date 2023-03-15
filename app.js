var express = require('express');
require('dotenv').config();
var path = require('path');
var bodyParser = require('body-parser');

var app = express();




// view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.get('/', (req, res) => res.render('./quiz/quizzer'));


// routes

var userRoute = require('./routes/user');
var scoreRoute = require('./routes/score');
var quizzerRoute = require('./routes/quizzer');


// setup routes

app.use('/user', userRoute)
app.use('/quiz', scoreRoute)



app.use('/quiz', quizzerRoute);



app.listen(3000, function(){
    console.log("3000")
});