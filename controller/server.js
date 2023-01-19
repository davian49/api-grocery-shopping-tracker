const express = require('express')
const bodyParser = require('body-parser');
const server = express()
const PORT = 3000;



// server.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

server.listen(PORT, () => {
    console.log("Listening on port 3000")
})

module.exports = server