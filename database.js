// This file handles all the database connecting we need to do.
var mongoose = require('mongoose');

// Make a schema & tell mongoose the collection name = 'item' not 'items'
var Item = new mongoose.Schema({
  nameID: { type: String },
  name: { type: String },
  brand: { type: String },
  color: { type: String },
  price: { type: Number },
}, { collection: 'item' });

// Makes a model out of our schemas
mongoose.model('Item', Item);

// We then connect to our mongoDB called itemdb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/itemdb');
// This is all changeable when we connect to a proper database.
console.log(' We are now connected ');
