// In this file we pretty much lay out how our app responds to requests / parses them
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./database'); // getting info from database.js
var item = require('./item'); // getting info from item.js

app.use(bodyParser.json());
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/publicFiles'));
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/catalogue.html');
});

// Post, Get, Delete
// ITEM
app.post('/item', item.createItem); // when POST is called we create an item
app.get('/item', item.listItems); // when GET is called we retrieve ALL items
app.delete('/item/:nameID', item.deleteItem); // when DELETE is called we delete an item

//app.get('/team', team.seeTeams);
// Start our server on port 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
