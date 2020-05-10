import React from 'react';
import { shallow } from 'enzyme';
import SelectedDatePage from './selectedDatePage';

describe('SelectedDatePage', () => {
  const searchAllRecipeForDateMock = jest.fn()

  it('should only render RecipesearchBox component when no recipe', () => {
    const wrapper = shallow(<SelectedDatePage searchAllRecipeForDate={searchAllRecipeForDateMock}/>) 
    expect(wrapper.find("[data-test='Selected-Date-Page-Without-Existing-Recipe']").length).toEqual(1)
  })
  it('should render existing recipe and search box', () => {
    const existingRecipeMock = {existingRecipe: true}
    const RecipeForDateMock = { 
      date: '15-05-2020',  
        recipe: [{
          title: 'fried chicken',
          image: 'picture of fried chicken',
          ingredients: [{text: 'chicken'}, {text:'flour'}],
          url: 'url of recipe'
        }]
      }
      
    const wrapper = shallow(<SelectedDatePage 
      searchAllRecipeForDate={searchAllRecipeForDateMock} 
      existingRecipe={existingRecipeMock}
      RecipeForDate={RecipeForDateMock}
      />) 
    expect(wrapper.find("[data-test='Selected-Date-Page-With-Existing-Recipe']").length).toEqual(1)    
  })
})