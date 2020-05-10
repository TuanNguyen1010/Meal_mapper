import React from 'react';
import {shallow} from 'enzyme';
import RecipeSearchResult from './recipesSearchResult';
import mockAxios from 'axios'
jest.mock('axios')

describe('RecipeSearchResult', () => {
  const dateObjectMock = new Date()
  const titleMock = 'fried chicken'
  const imageMock = 'picture of fried chicken'
  const ingredientsMock = [{text: 'chicken'}, {text:'flour'}]

  it('it render recipes containers', () => {
    const wrapper = shallow(<RecipeSearchResult
      title={titleMock} 
      date={dateObjectMock} 
      ingredients={ingredientsMock}
      image={imageMock}/>)

    expect(wrapper.find("[data-test='recipe-Result-container']").length).toBe(1)
  })
})