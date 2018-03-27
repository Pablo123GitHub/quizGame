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


app.listen(3000, function(){
    console.log("Express app running on port 3000")
});