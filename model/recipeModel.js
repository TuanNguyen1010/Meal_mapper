const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  date:{
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true, 
  },
  calories: {
    type: Number,
    require: true
  },
  ingredients: {
    type: Array, 
    require: true
  },
  image: {
    type: String,
  }
})

module.exports = mongoose.model('recipe', recipeSchema)