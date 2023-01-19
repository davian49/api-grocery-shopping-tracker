const express = require('express')
const bodyParser = require('body-parser');
const GroceryItem = require('./model/groceryItem');
const dao = require('./repository/groceryItemDAO')
const server = express()
const PORT = 3000;

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Hello World!')
  })

server.listen(PORT, () => {
    console.log("Listening on port 3000")
})

// let item = new GroceryItem('carrots',3,1.15)

// dao.insertNewGroceryItem(item)
dao.getItemByID('4ssiv2zkld2hmxxz')
