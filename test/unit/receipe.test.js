const RecipeController = require('../../routes/api/recipeApi')
const httpMock = require('node-mocks-http')
const RecipeModel = require('../../model/recipeModel')
const CreateMock = require('../mock/mockCreate.json')

RecipeModel.create = jest.fn()

beforeEach(() => {
  req = httpMock.createRequest()
  res = httpMock.createResponse()
  next = jest.fn()
})

describe('receipeController', () => {

  it('has a function saveRecipe', () => {
    expect(typeof RecipeController.saveRecipe).toBe('function')
  })
  
  it('calls the create function on recipe model', () => {
    req.body = CreateMock
    RecipeController.saveRecipe(req, res, next)
    expect(RecipeModel.create).toBeCalledWith(CreateMock)
  })
})