const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  date:{
    type: String,
    required: true
  },
  recipe: {
    type: Array,
    required: true, 
  }
})

module.exports = mongoose.model('recipe', recipeSchema)