// Heres where things get messy
// We're defining all of our functions that we can perform with ---> users <---
// You could split up teams, matches etc into seperate .js files

require('mongoose').model('Item');
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

// For the purpose of a sample, we can add items.
module.exports = {
  createItem: function (req, res) {
    var product = req.body;
    var itm = new Item({ nameID: product.nameID, name: product.name, brand: product.brand,
      color: product.color, price: product.price})
      .save(function (err) {
        if (err) {
          res.status(504);
          res.end(err);
        } else {
          console.log('Item added to catalog');
          res.end();
        }
      });
  },
// This allows us to see all items
// parameters = request, response, next(unsure about this one)
// we query the item model and find all
// some error handling is done
// if no errors we then run a for loop, logging all records in console.
  listItems: function (req, res, next) {
    Item.find({}, function (err, docs) {
      if (err) {
        res.status(504);
        res.end(err);
      } else {
        for (var i = 0; i < docs.length; i++) {
         console.log('NameID:', docs[i].nameID, ', Color:', docs[i].color);
        }
        res.end(JSON.stringify(docs));
      }
    });
  },
  // This deletes an item given an ID
    deleteItem: function( req, res, next) {

      Item.find({ nameID: req.params.nameID}, function(err) {
        if(err) {
          req.status(504);
          req.end();
          console.log(err);
        }
      }).remove(function (err) {
        if (err) {
          res.end(err);
        } else {
          res.end();
        }
      });
    }
}
