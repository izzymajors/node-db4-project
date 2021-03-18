const express = require('express')

const server = express()

server.use(express.json())

const PORT = 5000

server.get('/', (req, res) => {
    res.json({ message: 'response with on'})
})

server.listen(PORT, () => {
   console.log(`\n*** server running on Port ${PORT}***`) 
})