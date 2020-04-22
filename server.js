const express = require('express');
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
require('dotenv').config()

//import routes
const recipesRoutes = require('./routes/recipe')

//middleware
app.use(express.json())
app.use(cors())

//routes 
app.use("/recipe", recipesRoutes)
app.get('/', (req, res) => {
  res.json("Hello World")
})


const port = 8000
app.listen(port, () => {
  console.log(`server is runing on port ${port}`)
})

mongoose.connect(
  process.env.LOCAL_DATABASE,
  {useNewUrlParser: true, 
  useCreateIndex: true
  }
)
.then(()=> console.log('Connected to DB'))

mongoose.connection.on('error', err => {
  console.log(`error connecting: ${err.message}`)
})

module.exports = app