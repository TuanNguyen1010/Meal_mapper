const express = require('express');

const app = express()

//middleware
app.use(express.json())

app.get('/', (req, res) => {
  res.json("Hello World")
})


const port = 8000
app.listen(port, () => {
  console.log(`server is runing on port ${port}`)
})