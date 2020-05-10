import React from 'react';
import { shallow } from 'enzyme';
import RecipeSearchBox from './recipeSearchBox';

describe('recipeSearchBox', () => {
  const selectedDateMock = '15-05-2020'
  it('fetch recipe render the recipeSearchBox component', () => {
    const wrapper = shallow(<RecipeSearchBox selectedDate={selectedDateMock}/>)
    expect(wrapper.find("[data-test='recipe-Search-Box']").length).toEqual(1)
  })
})