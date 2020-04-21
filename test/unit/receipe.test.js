const RecipeController = require('../../controller/recipeController')


describe('receipeController', () => {
  it('has a function saveRecipe', () => {
    expect(typeof RecipeController.saveRecipe).toBe('function')
  })
})