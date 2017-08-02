// drop the db
use itemdb
db.dropDatabase()

// create the db
use itemdb

// create the collection
db.createCollection("item")

// populate the collection
db.item.insertMany([
						{nameID: "SeeleyBlack", name:"Seeley", brand: "Adidas", color: "Black", price: 100},
						{nameID: "SeeleyBlue", name: "Seeley", brand: "Adidas", color: "Blue", price: 100}
])
