const express = require('express');
const router = express.Router();
const RecipeController = require('../controller/recipeController')

router.post('/add', RecipeController.saveRecipe)
router.get('/findByDate/:date', RecipeController.findByDate)

module.exports = router