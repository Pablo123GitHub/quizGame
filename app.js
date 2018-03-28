var express = require('express');
var app = express();
var session = require('express-session');

var data = require('./data/data.js');
var Quiz = require('./lib/Quiz.js');

app.use(express.static('public'));
app.use(session({
    secret: 'this-is-a-secret-token',
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true
}));
app.set('view engine', 'ejs');


app.get("/", function(req,res){
    res.render("index");
});

app.post("/play/:number", function(req, res){
   var sessData = req.session;
   var number = req.params.number;
   var indexUp = parseInt(number) +1;
   sessData.indexUp = indexUp;
   sessData.pathUp = "/play/" + String(indexUp)
    sessData.indexNumber = number;
    res.redirect(`/play/${number}`);
});

app.get("/play/:number", function(req, res){
    var sessData = req.session;
    var quiz = new Quiz(data);
    sessData.quiz = quiz ;
    console.log(req.session)
   res.render("question", {indexUp: sessData.indexUp,
       questionAtIndex: sessData.indexUp})
});

app.listen(3000, function(){
    console.log("Express app running on port 3000")
});