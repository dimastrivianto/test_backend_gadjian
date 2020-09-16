const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express();
const port = 2020

const jawaban = require('./jawabanNo4dan5/jawabanNo4dan5.js')

app.use(express.json())
app.use(jawaban)

app.get('/', (req, res) => {
  res.send(`<h1>API is running at port : ${port}</h1>`)
})


app.listen(port, () => { console.log(`API is Running at ${port}`)})