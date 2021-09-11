const express = require('express')
const server = express()
const path = require('path')
const multer = require('multer')
const fs = require('fs')
const PORT = 3000

server.use(express.static('public'))
server.use(express.json())

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })

server.get('/users.json', (req, res) => {
  fs.readFile('users.json', function (err, data) {
    var json = JSON.parse(data)
    res.send(json)
  })
})

server.get('/processForm', (req, res) => {
  const userId = Math.floor(Math.random() * 10000)
  const userName = {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  }

  fs.readFile('users.json', function (err, data) {
    json = JSON.parse(data)
    json.users.push({ userId: userId, userName })
    fs.writeFile('users.json', JSON.stringify(json), function (err) {
      if (err) throw err
      console.log('The "data to append" was appended to file!')
    })
  })

  res.send(`Your user was added as: ${userName.firstName} ${userName.lastName}`)
})

server.post(
  '/uploadFile',
  upload.single('file'),
  (req, res) => {
    res.status(200).send('Your file was uploaded!')
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message })
  }
)

server.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`))
