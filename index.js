const express = require('express')
const bodyParser = require('body-parser');
const GroceryItem = require('./model/groceryItem');
const gdao = require('./repository/groceryItemDAO')
const server = express()
const PORT = 3000;

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.send('Hello World!')
  })

server.listen(PORT, () => {
    console.log("Listening on port 3000")
})

let item = new GroceryItem('oranges',2,2.45)

gdao.insertNewGroceryItem(item)
gdao.getItemByID('4ssiv2zkld2hmxxz')
