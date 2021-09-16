const express = require('express')
const server = express()
const path = require('path')
const uuidv4 = require('uuid/v4')
const cors = require('cors')
const fs = require('fs')
const PORT = 3001

server.use(cors())
server.use(express.json())

server.post('/registerUser', (req, res) => {
  const userId = uuidv4()
  const userData = {
    name: req.body.name,
    address: req.body.address,
    birthDate: req.body.birthDate,
  }
  fs.readFile('./data/data.json', (err, data) => {
    json = JSON.parse(data)
    json.users.push({ id: userId, data: userData })
    fs.writeFile('./data/data.json', JSON.stringify(json), (err) => {
      if (err) throw err
    })
  })
  res.send('User created')
})

server.get('/getUsers', (req, res) => {
  fs.readFile('./data/data.json', (err, data) => {
    json = JSON.parse(data)
    res.send(json)
  })
})

server.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))
