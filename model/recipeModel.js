const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  date:{
    type: String,
    require: true
  },
  recipe_one: {
    type: Object,
    require: true, 
  },
  recipe_two: {
    type: Object
  },
  recipe_three: {
    type: Object,
  }
})

module.exports = mongoose.model('recipe', recipeSchema)