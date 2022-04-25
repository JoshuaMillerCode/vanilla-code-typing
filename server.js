const express = require('express')
const app = express()
const axios = require('axios')
const snippetRouter = require('./controllers/snippets')





app.use(express.json())
app.use(express.static('public'))
app.use('/snippets', snippetRouter)






app.listen(3000, () => {
  console.log("Running on port: " + 3000)
})