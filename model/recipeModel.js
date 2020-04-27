const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  date:{
    type: String,
    required: true
  },
  recipe_one: {
    type: Object,
    required: true, 
  },
  recipe_two: {
    type: Object
  },
  recipe_three: {
    type: Object,
  }
})

module.exports = mongoose.model('recipe', recipeSchema)