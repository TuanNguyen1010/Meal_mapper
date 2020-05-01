const recipeModel = require('../../model/recipeModel')

exports.saveRecipe = async (req, res, next) => {
  try{
    const saveRecipeModel= await recipeModel.create(req.body)
    res.status(201).json(saveRecipeModel)
  } catch(err) {
    next(err)
  }
}

exports.find = async (req, res, next) => {
  try{
    const findAll = await recipeModel.find({})
    res.json(findAll)
  } catch(err){
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

exports.addAdditionalRecipe = async (req, res, next) => {
  try{
    const additionalRecipe = await recipeModel.findOneAndUpdate(
      {date: req.body.date},
      {$push: {recipe: req.body.recipe}},
      {
        new: true,
        useFindAndModify: false
      }
    )
    if (additionalRecipe) {
      res.json(additionalRecipe)}
    else {
      res.status(404).send()
    }

  } catch(err){
    next(err)
  }
}