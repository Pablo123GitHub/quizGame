var request = require('request');
var cheerio = require('cheerio');
var path = require('path');


request('http://localhost:3000/', function (error, response, html) {
    console.log("TESTING THE DOM WITH CHEERIO AND REQUEST");
    console.log("****************************************");
    console.log("IF YOU SEE ANY false BOOLEAN UNDER THIS LINE");
    console.log("IT MEANS THAT THE TEST IS NOT PASSING");
    console.log("PLEASE GO TO spec/DomTesting FOR MORE DETAILS ");
    console.log("----------------------------------------------");
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        console.log("spec/DomTesting/" + path.basename(__filename));
        console.log($('h1').text() == "Start the game by clicking on the button");
    } else {
        console.log(error);
    }
});