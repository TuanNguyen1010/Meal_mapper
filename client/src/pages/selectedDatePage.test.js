import React from 'react';
import { shallow } from 'enzyme';
import SelectedDatePage from './selectedDatePage';

describe('SelectedDatePage', () => {
  it('should only render RecipesearchBox component when no recipe', () => {
    const searchAllRecipeForDateMock = jest.fn()
    const wrapper = shallow(<SelectedDatePage searchAllRecipeForDate={searchAllRecipeForDateMock}/>) 
    expect(wrapper.find("[data-test='Selected-Date-Page-Without-Existing-Recipe']").length).toEqual(1)
  })

})