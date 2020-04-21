const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
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