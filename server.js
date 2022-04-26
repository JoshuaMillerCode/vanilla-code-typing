require("dotenv").config()
const express = require('express')
const app = express()
const axios = require('axios')
const snippetRouter = require('./controllers/snippets')
const PORT = process.env.PORT || 3000




app.use(express.json())
app.use(express.static('public'))
app.use('/snippets', snippetRouter)






app.listen(PORT, () => {
  console.log("Running on port: " + PORT)
})