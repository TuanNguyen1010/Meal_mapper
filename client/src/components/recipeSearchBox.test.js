import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import RecipeSearchBox from './recipeSearchBox';
import mockAxios from 'axios';
jest.mock('axios')

describe('recipeSearchBox', () => {
  const searchDataMock = 'chicken'
  const selectedDateMock = '15-05-2020'

  it('fetch recipe render the recipeSearchBox component', () => {
    const wrapper = shallow(<RecipeSearchBox selectedDate={selectedDateMock}/>)
    expect(wrapper.find("[data-test='recipe-Search-Box']").length).toEqual(1)
  })

  it('change state of searchData from input field', () => {
    const wrapper = shallow(<RecipeSearchBox selectedDate={selectedDateMock}/> )
    const inputField = wrapper.find("[data-test='recipe-Search-Input']")
    inputField.simulate('change', {target: {value: searchDataMock}})
    expect(wrapper.state().searchData).toEqual(searchDataMock)
  })

  it('fetch recipe information', async () => {
    const APP_ID = "a3ad555a"
    const API_KEY = "b9c79644c2f78df9d76f77fc33c0fa24"
    const recipeDataMock = {
      hits:[{
        recipe: {
          label: 'fried chicken',
          image: 'picture of fried chicken',
          ingrediendts: [{
            text: 'chicken'
          }],
          url: 'url of recipe'
        }
      }]
    }

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: recipeDataMock
    }));

    const wrapper = await shallow(<RecipeSearchBox selectedDate={selectedDateMock}/> )
    const form = wrapper.find("[data-test='recipe-Search-Submit']")
    const inputField = wrapper.find("[data-test='recipe-Search-Input']")
    inputField.simulate('change', {target: {value: searchDataMock}})
    form.simulate('submit', { preventDefault() {} })
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.edamam.com/search?q=${searchDataMock}&app_id=${APP_ID}&app_key=${API_KEY}`)
  })
})