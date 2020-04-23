const express = require('express');
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()
const path = require('path')

//import routes
const recipesRoutes = require('./routes/recipeRoute')

//middleware
app.use(express.json())
app.use(cors())

//routes 
app.use("/recipe", recipesRoutes)
app.get('/', (req, res) => {
  res.json("Hello World")
})

//connect to cloud db
mongoose.connect(
  process.env.MONGODB_URL,
  {useNewUrlParser: true, 
  useCreateIndex: true
  }
)
.then(()=> console.log('Connected to DB'))

mongoose.connection.on('error', err => {
  console.log(`error connecting: ${err.message}`)
})

// Setup for Production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

module.exports = app