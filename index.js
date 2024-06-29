require('dotenv').config()
const express = require('express')

const app = express()

// const port = 3000;

app.get('/', (req, res) => {
  res.send('This is home')
})

app.get('/twitter', (req, res) => {
  res.send('This is twitter page')
})

app.get('/youtube', (req, res) => {
  res.send('<h3>This is youtube channel</h3>')
})

app.get('/login', (req, res) => {
  res.send('<h1>Login here!!</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`App listening at port ${process.env.PORT}`)
})