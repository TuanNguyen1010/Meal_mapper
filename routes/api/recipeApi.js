const recipeModel = require('../../model/recipeModel')

exports.saveRecipe = async (req, res, next) => {
  try{
    const saveRecipeModel= await recipeModel.create(req.body)
    res.status(201).json(saveRecipeModel)
  } catch(err) {
    next(err)
  }
}


exports.findByDate = async (req, res, next) => {
  try{
    const findDate = await recipeModel.findOne({date: req.params.date})
    res.status(200).json(findDate)
  } catch(err) {
    next(err)
  }
}