// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();
var Quiz = require('../lib/Quiz');
var data = require('../data/data');

router.post("/score", function(req, res){
    res.render("score");
});

module.exports = router;
