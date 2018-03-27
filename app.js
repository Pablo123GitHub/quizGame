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
   sessData.pathUp = "/play/" + String(indexUp)
    sessData.indexNumber = number;
    res.redirect(`/play/${number}`);
});

app.get("/play/:number", function(req, res){
   res.send("hey well done this is /play/0")
});

app.listen(3000, function(){
    console.log("Express app running on port 3000")
});