const express = require('express')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./routes')
const PORT = process.env.PORT || 3001
const app = express()

// Define middleware here
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}
// Add routes, both API and view
app.use(routes)

// Connect to the Mongo DB
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks', {
  useCreateIndex: true,
  useNewUrlParser: true
})
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})
