const recipeModel = require('../model/recipeModel')

exports.saveRecipe = async (req, res, next) => {
  try{
    const saveRecipeModel= await recipeModel.create(req.body)
    res.status(201).json(saveRecipeModel)
  } catch(err) {
    next(err)
  }
}
