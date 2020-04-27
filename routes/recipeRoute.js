const express = require('express');
const router = express.Router();
const RecipeController = require('./api/recipeApi')

router.post('/', RecipeController.saveRecipe)
router.get('/:date', RecipeController.findByDate)
router.put('/', RecipeController.AddSecondRecipe)

module.exports = router