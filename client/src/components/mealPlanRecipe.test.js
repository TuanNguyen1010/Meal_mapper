import React from 'react';
import { shallow } from 'enzyme';
import MealPlanRecipe from './mealPlanRecipe';

describe('MealPlanRecipe', () => {
  it('should render existing recipes', () => {
    const dateObjectMock = new Date()
    const titleMock = 'fried chicken'
    const imageMock = 'picture of fried chicken'
    const ingredientsMock = [{text: 'chicken'}, {text:'flour'}]
    const wrapper = shallow(<MealPlanRecipe 
    title={titleMock} 
    date={dateObjectMock} 
    ingredients={ingredientsMock}
    image={imageMock}/>)
   
    expect(wrapper.find("[data-test='Meal-Plan-Container']").length).toBe(1)
    expect(wrapper.find("[data-test='Meal-Plan-title']").text()).toEqual(titleMock)
    expect(wrapper.find("[data-test='Meal-Plan-ingredient']").text()).toContain(ingredientsMock[0].text)
    expect(wrapper.find("[data-test='Meal-Plan-image']").props().src).toEqual(imageMock)
  })
})