import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import ExistingRecipe from './existingRecipe'

describe('ExistingRecipe', () => {
  it('renders existing recipes', () => {
    const savedRecipeTitleMock = 'Fried Chicken'
    const savedRecipeIngredientsMock = [{text: 'chicken'}]
    const savedRecipeImageMock = 'picture of saved recipe'
    
    const wrapper = shallow(<ExistingRecipe 
      savedRecipeImage={savedRecipeImageMock}
      savedRecipeTitle={savedRecipeTitleMock}
      savedRecipeIngredients={savedRecipeIngredientsMock}
      /> )
      expect(wrapper.find("[data-test='Existing-Recipe-container']").length).toBe(1)
      expect(wrapper.find("[data-test='Existing-Recipe-image']").props().src).toEqual(savedRecipeImageMock)
      expect(wrapper.find("[data-test='Existing-Recipe-title']").text()).toEqual(savedRecipeTitleMock)
      expect(wrapper.find("[data-test='Existing-Recipe-ingredients']").text()).toContain(savedRecipeIngredientsMock[0].text)
  })
})