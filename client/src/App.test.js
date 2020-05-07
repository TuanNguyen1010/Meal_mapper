import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import { render } from '@testing-library/react';
import App from './App';
import mockAxios from 'axios'
jest.mock('axios')

describe('App', () => {
  const recipeData = [{date: '15-05=2020', recipe: [{title: 'Fried Chicken'}]}]

  it('should search Db when #componentDidMounted', async () => {

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      data: recipeData
    }))
    const wrapper = await shallow(<App/>)
    expect(wrapper.state().AllRecipe).toEqual(recipeData)
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith('/api/')
  })
})