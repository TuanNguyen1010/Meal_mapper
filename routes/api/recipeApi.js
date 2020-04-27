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

exports.AddSecondRecipe = async (req, res, next) => {
  try{
    const AddSecondRecipe = await recipeModel.findOneAndUpdate(
      {date: req.body.date},
      {recipe_two: req.body.recipe_two},
      {
        new: true,
        useFindAndModify: false
      }
    )
    if (AddSecondRecipe) {
      res.json(AddSecondRecipe)}
    else {
      res.status(404).send()
    }

  } catch(err){
    next(err)
  }
}